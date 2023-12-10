// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Faucet {
    IERC20 public token;

    event TokenDistribution(address target, uint256 amount);

    constructor(address _token) {
        token = IERC20(_token);
    }

    function getTokens() public {
        uint256 amount = (block.number % 100) * 100 ether;
        token.transfer(msg.sender, amount);
        emit TokenDistribution(msg.sender, amount);
    }
}
