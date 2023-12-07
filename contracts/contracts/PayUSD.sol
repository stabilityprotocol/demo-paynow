import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PayUSD is ERC20 {
    constructor() ERC20("PayUSD", "PUSD") {
        _mint(msg.sender, 10000000 ether);
    }
}