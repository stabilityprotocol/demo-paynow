import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Faucet {
    IERC20 public token;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function getTokens() public {
        uint256 amount = (block.number % 100) * 100 ether;

        token.transfer(msg.sender, amount);
    }
}