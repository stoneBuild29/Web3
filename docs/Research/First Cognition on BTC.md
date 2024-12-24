# Analysis and First Cognition of Bitcoin

**Objective**  
  - Plan to read Satoshi Nakamoto’s essay to understand the foundations of blockchain technology.  

**Structure**
  - **Questions Raised**
  - **Core Idea** 
  - **Takeaways** 
  - **Reflections**
  

# Questions Raised
- 
nihbjsbis
## nih
bajs
### nash
basjdakd





    



### Essay: Bitcoin: A Peer-to-Peer Electronic Cash System


### Abstract: ****

**A releavtion**. (反映) the design is a purely peer-to-peer version of electronic cash.the function is that the design is to applied on online payments. explictly(具体地) speaking, coin would be sent directly from one party to another without a central [instituation.](http://instituation.At) At the same time, the design is composing a special data structure —— *the network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.* so the importance is not to **the implement of hash algorithm** but also the the machanism —— **proof-of-work.**Additionally, the abstract defines the web orhi(我拼不出来，是组织架构)—— **Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will.** So  I have doubts——how the nodes connection(通信)，TCP/IP is working ?

### Introduction:

- solve question: cryptographic proof instead of trust(get rid of the traditional pattern)
- security:

> *The system is secure as long as honest nodes collectively control more CPU power than any cooperating group of attacker nodes.(This is a limited condition, what if the condition is not entangild(不成立呢？)*)
> 

### Transaction

- 中本聪选择公钥/私钥体系，是因为这种设计能够同时解决**安全性**、**完整性**和**去中心化信任**三大问题：
    1. 私钥签名确保交易**只能由合法持有者发起**。
    2. 公钥验证确保数据**不可篡改**且可以独立验证。
    3. 去中心化的验证机制避免了对任何第三方的依赖。
    
    这种密码学结构是**非对称加密**算法的核心应用，也是比特币得以安全运行的重要基础。
    
- at the structure, the specific item of transaction and the public key of the next owner would be hashed into a new sequence by hashing algothrim(算法).The hash sequence,  the owner’s public key and the signature by the owner’s private key is combined to sent to the next owner. By this means, the data would be stored by a chain structure and a loop bonded a loop.Additionally the public key and the private key provide a authentity and (认证和鉴权) method.And the method would get rid of the central control.

[对称加密和非对称加密](https://www.notion.so/49413c467aec4dd49c8cef6c984bee83?pvs=21)

All the above mechanism may ensure the data connection by chain at some case, but to some extent, there are a question to be continued —— trust party. Just like bank system, the mint system would guarantee the incidence（发生） of double-spending.

To solve the problem, transactions would be broadcast publicly. And a mechanism would be applied to **ensure the participant of every nodes.**

- to make a proper data structure and ensure security

### Timestamp Server (construct a chain)      content

- okay， now I certify the hash algo ,and what content would be hashed? such as the content of transaction, I will make every data of the block would be valuable and how to make security gradually.

### Proof- of -work consenus(共识)

- Block Components: A block contains
    - Previous Block Hash: A reference to the hash of the last block in the chain.
    - Transaction: A list of new, valid transactions to be added to the blockchain.
    - Nonce: A random number that miners change to solve the PoW puzzle.(So important)
    - Merkle Root: A single hash summarizing all the transactions in the block.
    - Timestamp: The current time
    - Difficulty Target: The  current threshold for the hash to be considered valid.
- Hashing Process:
    - Miners repeatedly hash the block’s components using the SHA-256 hashing algorithm.
    - Each hash output looks random, and miners must find a hash that is below the difficulty target(starts with a specific number of zero bits)

### Network

- **Q:When I buy a coin BTC, what happened on the invisible world?**
- **A:**
    - Miners collect verified transactions from the network and include them in a block.
    - Miners solve the Proof-of-Work puzzle for that block.
    - The first miner to solve the puzzle broadcasts the block to all nodes.
    - Other nodes(51%) verify the block’s proof-of-work solution and all included transactions:
        - They check balances, prevent double-spending, and validate signatures.(Just like the physical banking system to validate some data and )
        - validate Signatures:
            
            Nodes use the sender’s public key to verify that(the last security algorithm I mentioned):
            
            - The transaction was included authorized by the sender.(The signature is formed by the sender’s private key)
            - The digital signature matches the transaction data.
    - If the block is valid, nodes add it to their local copy of the blockchain.
        - The network continues to extend the chain by building new blocks using the hash of the latest. valid block.
- **Q: And why was the transaction interval so long?**
- **A:** The transaction interval is long because
    - Mining Difficulty: Solving PoW to produce a block takes ~10 minutes.
    - Limited Block Space: Only a fixed number of transactions can fit in one block.
    - Fee-Based Priority: Low-fee transactions might not be prioritized.
    - Network Verification: Blocks and transactions must propagate and be verified by all nodes.
    

### thinking

- **Q: After that , I started to think what would sakito want to design?**
- **A:**
    - a system that could run normally and applied to more and more people
    - designed to decantrialied, okay, some security questions were considered in advance, just like identity certification, payment issues(the amount transfered and the fee)
    - I imagine the system ,of course Bitcoin is a sophiscated system.And no government would control this.Just like miners who mint dimonds, the difference is dimonds are conseusly [expensive.](http://expensive.Now) How the system ensure the equality and profitable? the equality solves question that automaty and security. The profitable characteristic would reveal the fucntion to catering to human nature——there are interests to drive for
    - Now my next question is why the Bitcoin is available? If I said the stone is expensive, then any other people agree with it ?
- **Q: And how does they correslate with each other to form a whole?**
- **A:**
    
    The truth is that I devote all my brainstorming to recall the thinking process and think what I would do & the meaning of actions of sakito. I can hardly accsee to his minds. 
    
    If I was the author of Bitcoin, maybe my ambition is to make more people agree with the working system. And the system would be running automaticlly without someone’s control.Then I would put the important core - money .It’s not only the production of the system, but also the indenpsble factor when I want to run this. The system would produce and consume it at the same [time.To](http://time.To) the aim with more people using the system , I would connect it with the running process.
    
    After I drink some water, I think about that the data structure would grarantee the data complexitity and immutablity. Then PoW would be a tool to set up a criteria. For example, the family seperate pears based to ages.The PoW mechanism is the inherent agreement——the same as the ages.Once I entered the system, I would agree with the principle —— The labor/computering capitity who spends much, the more interests he would get.
    
    Okay, thinking about it, the system aims to 2 goals: 1. interests involeved (that’s data structure work aim, to create a coin and grarantee the chronologically accurate)2. distribution based on a general agreable principle.
    
    My  next question is why Bitcoin so expensive ,and the value would connect with money?