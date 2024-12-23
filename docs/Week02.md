**plan(12.16-12.20)**

# Goal

1. learn the basic concept of blockchin,Ethereum and dapp
2. know how to deal with transactions,the function of miners and Gas fee
3. grasp the Ethereum account model,transaction circuit and messaging
4. understand the basis grammer of Solidity(datatype,variable and control structure) and begin to code for a contract
5. learn a more complicated function(function,event and modifiers)
6. code and test the first simple smart contract

## Resources

1. https://ethereum.org/en/developers/docs/
2. https://github.com/ethereumbook/ethereumbook
3. https://cryptozombies.io/

## Key

### Blockchain

Blockchain is a distributed ledger constructed using a specialized data structure.Data is stored in blocks , with each block referencing the hash of the previous block, forming a chain-like structure. This design makes the system secure, efficient, decentralized and based on mutual consensus.

| Feature        | Traditional Economic Model | Blockchain             |
| :------------- | :------------------------: | :--------------------- |
| Control        |        Centralized        | Decentralized          |
| Trust          |       Intermediaries       | Cryptographic Proof    |
| Transparency   |          Limited          | Public or Pseudonymous |
| Intermediaries |          Required          | Eliminated             |
| Accessibility  |         Restricted         | Open to All            |
| Governance     |        Hierarchical        | Community-Driven       |
| Data Integrity |         Alterable         | Immutable              |

### Ethereum

Ethereum is a blockchain with an integrated Ethereum Virtual Machine(EVM), allowing developers to build decentralized applications(dApps) directly on the blockchain. It uses a proof-of-stake (PoS) consensus mechanism where validators must stake ETH to propose and validate new blocks, ensuring network security and proper incentives.

> Supplement
>
> 1. Solidity: the primary programming language used for writting smart contracts on the EVM
> 2. Ether(ETH): the native cryptocurrency of Ethereum, used for transactions, staking, and paying gas fees

### Consensus

Blockchain consensus mechanisms, such as proof-of-work(PoW) and proof-of-stake(PoS), function like regulatory protocols. They ensure all nodes or partipants follow shared rules for validating transactions and achieving agreements on the network state.

> **Different Situations**
>
> * Blockchain: Bitcoin, built on Blockchain, relies on Proof-of-Work which depends on computational effort. Miners expend significant computational resources to solve cryptographic puzzles, adding blocks to the chain and

the difference & the similarity of consensus between Blockchain and Ethereum

The consensus on the blockchain is functioning like a regulation.Every node or user comply with the distribution rule or adjudication methods. The consensus is PoW(Proof - of - Work) on Blockchain when it's PoS(Proof - of - Stake) on Ethereum.

When the transaction happened or the state would be changed, the nodes would make use of their computer capitities to vertify the correct. The difference is one depending on computering work, another is the number of stake
