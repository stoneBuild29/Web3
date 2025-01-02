
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
 
// contract NFT is ERC721 {
//     uint256 public tokenCounter;

//     constructor() ERC721("MyNFT", "MNFT"){
//         tokenCounter = 0;
//     }

//     function createNFT(address recipient) public returns (uint256) {
//         uint256 newTokenId = tokenCounter;
//         _safeMint(recipient, newTokenId);
//         tokenCounter++;
//         return newTokenId;
//     }
// }
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint256 public tokenCounter;

    constructor() ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
    }

    function createNFT(address recipient, string memory tokenURI) public returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        tokenCounter++;
        return newTokenId;
    }

    // New: Get all token IDs owned by a specific address
    function getTokensByOwner(address owner) public view returns (uint256[] memory) {
        uint256 tokenCount = balanceOf(owner);
        uint256[] memory tokenIds = new uint256[](tokenCount);

        uint256 index = 0;
        for (uint256 i = 0; i < tokenCounter; i++) {
            if (ownerOf(i) == owner) {
                tokenIds[index] = i;
                index++;
            }
        }

        return tokenIds;
    }
}
