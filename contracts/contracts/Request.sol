// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PaymentRequestContract {
    IERC20 public token;

    enum RequestState { Requested, Cancelled, Payed }

    struct PaymentRequest {
        uint256 id;
        address requester;
        address target;
        uint256 amount;
        RequestState state;
        string memo;
    }

    uint256 private requestIdCounter = 0;

    mapping(uint256 => PaymentRequest) public requests;
    mapping(address => uint256[]) private requestsByRequester;
    mapping(address => uint256[]) private requestsByTarget;

    // Eventos
    event RequestCreated(uint256 indexed requestId, address indexed requester, address indexed target, uint256 amount);
    event RequestCancelled(uint256 indexed requestId);
    event RequestFulfilled(uint256 indexed requestId, uint256 amount);

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    function createRequest(address _target, uint256 _amount, string _memo) external {
        require(_target != address(0), "PaymentRequestContract: Target cannot be zero address");
        require(_amount > 0, "PaymentRequestContract: Amount must be greater than zero");

        uint256 newRequestId = requestIdCounter++;
        requests[newRequestId] = PaymentRequest({
            id: newRequestId,
            requester: msg.sender,
            target: _target,
            amount: _amount,
            state: RequestState.Requested,
            memo: _memo
        });
        requestsByRequester[msg.sender].push(newRequestId);
        requestsByTarget[_target].push(newRequestId);

        emit RequestCreated(newRequestId, msg.sender, _target, _amount);
    }

    function cancelRequest(uint256 _requestId) external {
        require(requests[_requestId].target == msg.sender, "PaymentRequestContract: Only target can cancel");
        require(requests[_requestId].state == RequestState.Requested, "PaymentRequestContract: Request is not cancelable");

        requests[_requestId].state = RequestState.Cancelled;
        emit RequestCancelled(_requestId);
    }

    function fulfillRequest(uint256 _requestId) external {
        PaymentRequest storage request = requests[_requestId];

        require(request.target == msg.sender, "PaymentRequestContract: Only target can fulfill");
        require(request.state == RequestState.Requested, "PaymentRequestContract: Request is not fulfillable");

        token.transferFrom(msg.sender, request.requester, request.amount);

        request.state = RequestState.Payed;
        emit RequestFulfilled(_requestId, request.amount);
    }

    function getMyRequests() external view returns (PaymentRequest[] memory) {
        return getRequests(requestsByRequester[msg.sender]);
    }

    function getRequestsToMe() external view returns (PaymentRequest[] memory) {
        return getRequests(requestsByTarget[msg.sender]);
    }

    function getRequests(uint256[] memory requestIds) private view returns (PaymentRequest[] memory) {
        PaymentRequest[] memory userRequests = new PaymentRequest[](requestIds.length);
        for (uint i = 0; i < requestIds.length; i++) {
            userRequests[i] = requests[requestIds[i]];
        }
        return userRequests;
    }
}
