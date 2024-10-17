// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract UsamaNFT is ERC721URIStorage {
    uint private _tokenIds;

    constructor() ERC721("UsamaAbid", "USAMA") {}

    function mintNFT() public returns (uint256) {
        _tokenIds++;
        uint newItemId = _tokenIds;
        _mint(msg.sender, newItemId);

        _setTokenURI(newItemId, "https://gateway.pinata.cloud/ipfs/bafkreiftkf237cpl7drijoc4ycvoqti7tptbxf2vut6toxyaorrr6i6ssi");

        console.log(
            "The NFT ID %s has been minted to %s",
            newItemId,
            msg.sender
        );
        return newItemId;
    }

    // Public getter for tokenIds
    function getTokenIds() public view returns (uint) {
        return _tokenIds;
    }
}
