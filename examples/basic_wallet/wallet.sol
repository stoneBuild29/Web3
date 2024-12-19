// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BasicWallet {
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    function deposit() public payable {}

    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}