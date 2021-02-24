pragma solidity =0.5.16;

import '../CombustERC20.sol';

contract ERC20 is CombustERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
