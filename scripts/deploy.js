async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying with address", deployer.address);

    const Wallet = await ethers.getContractFactory("BasicWallet");
    const wallet = await Wallet.deploy();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});