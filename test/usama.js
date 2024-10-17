const { expect } = require("chai");

describe("UsamaNFT Contract", function () {
    let UsamaNFT, usamaNFT, owner, addr1;

    beforeEach(async function () {
        UsamaNFT = await ethers.getContractFactory("UsamaNFT");
        [owner, addr1] = await ethers.getSigners();
        usamaNFT = await UsamaNFT.deploy();
    });

    it("Should mint an NFT and assign it to the owner", async function () {
        const tx = await usamaNFT.mintNFT();
        await tx.wait();

        // Call the new getter function to check tokenIds
        const newTokenId = await usamaNFT.getTokenIds();
        expect(await usamaNFT.ownerOf(newTokenId)).to.equal(owner.address);
    });

    it("Should increment tokenIds when minting new NFTs", async function () {
        await usamaNFT.mintNFT();
        await usamaNFT.mintNFT();

        const totalMinted = await usamaNFT.getTokenIds();
        expect(totalMinted).to.equal(2);
    });

    it("Should assign the correct tokenURI", async function () {
        const tx = await usamaNFT.mintNFT();
        await tx.wait();

        const tokenURI = await usamaNFT.tokenURI(1); // Token ID starts at 1
        expect(tokenURI).to.equal("https://gateway.pinata.cloud/ipfs/bafkreiftkf237cpl7drijoc4ycvoqti7tptbxf2vut6toxyaorrr6i6ssi"); // Updated to match the contract
    });
});
