const { ethers } = require("hardhat");

// async function main() {
//     const [owner, recipient, newRecipient] = await ethers.getSigners();

//     const nftAddress = "<0x850EC3780CeDfdb116E38B009d0bf7a1ef1b8b38>";
//     const NFT = await ethers.getContractFactory("NFT");
//     const nft = await NFT.attach(nftAddress);

//     // Mint an NFT
//     console.log("Minting an NFT...");
//     const mintTx = await nft.createNFT(recipient.address, "https://example.com/token-metadata");
//     await mintTx.wait();
//     console.log("NFT Minted!");

//     // Transfer the NFT
//     console.log("Transferring NFT...");
//     const transferTx = await nft["safeTransferFrom(address,address,uint256)"](
//         recipient.address,
//         newRecipient.address,
//         0
//     );
//     await transferTx.wait();
//     console.log("NFT Transferred!");

//     // Query tokens owned by the new recipient
//     const tokens = await nft.getTokensByOwner(newRecipient.address);
//     console.log("Tokens owned by the new recipient:", tokens.map((t) => t.toString()));
// }
// async function main() {
//     console.log("Minting an NFT...");

//     // Replace with your actual deployed contract address
//     const CONTRACT_ADDRESS = "0x850EC3780CeDfdb116E38B009d0bf7a1ef1b8b38";

//     const [deployer] = await hre.ethers.getSigners();

//     // Check the contract address
//     if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS.length !== 42) {
//         throw new Error("Invalid contract address. Please ensure it's correct.");
//     }

//     const NFT = await hre.ethers.getContractFactory("NFT");
//     const nft = NFT.attach(CONTRACT_ADDRESS);

//     // Call the mint function (assuming mint requires a recipient address)
//     const tx = await nft.mint(deployer.address); // Use the deployer's address for minting
//     await tx.wait();

//     console.log("NFT minted successfully!");
// }


// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });
const hre = require("hardhat");

async function main() {
    console.log("Minting an NFT...");

    // Replace with the deployed contract address
    const CONTRACT_ADDRESS = "0x850EC3780CeDfdb116E38B009d0bf7a1ef1b8b38";

    const [deployer] = await hre.ethers.getSigners();

    // Get the contract factory and attach to the deployed address
    const NFT = await hre.ethers.getContractFactory("NFT");
    const nft = NFT.attach(CONTRACT_ADDRESS);

    // Set recipient and tokenURI
    const recipient = deployer.address; // You can use another address here
    const tokenURI = "https://example.com/metadata.json"; // Replace with your token metadata URI

    // Call the `createNFT` function
    const tx = await nft.createNFT(recipient, tokenURI);
    const receipt = await tx.wait();

    console.log(`NFT minted successfully! Transaction hash: ${receipt.transactionHash}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
