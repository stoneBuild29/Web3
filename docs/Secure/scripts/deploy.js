const { ethers } = require("hardhat");

async function main() {
    // Get the contract factory
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the NFT contract factory
    const NFT = await ethers.getContractFactory("NFT");
    // Deploy the contract
    const nft = await NFT.deploy();
    console.log("NFT contract deployed to:", nft.target);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});