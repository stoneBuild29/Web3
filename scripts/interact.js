async function main() {
    const [signer] = await ethers.getSigners();
    const walletAddress = "YOUR_DEPLOYED_WALLET_ADDRESS";
    const walletABI = [
        "function deposit() public payable",
        "function withdraw(uint256 amount) public",
        "function getBalnce() public view returns (uint256)"
    ];

    const wallet = new ethers.Contract(walletAddress, walletABI, signer);
    console.log("Current Balance:", await wallet.getBalance);

    //Example: Deposit funds
    await wallet.deposit({value: ethers.utils.parseEther("0.1")});
    console.log("Deposited 0.1 Ether");

    //Example: Withdraw funds
    await wallet.withdraw(ethers.utils.parseEther("0.05"));
    console.log("Withdrew 0.05 Ether");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});