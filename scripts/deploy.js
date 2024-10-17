const {ethers} = require("hardhat");

async function main(){

  const deployNFTContract = await ethers.deployContract("UsamaNFT");

  const usama = await deployNFTContract.waitForDeployment();

  console.log("Usama contract address is:", await usama.getAddress());

  console.log("Minting NFT...");
  let txn = await usama.mintNFT();
  await txn.wait();
  console.log("Yayy.. NFT minted successfully!!!");
}

main().then(() => process.exit(0))
.catch((err) => {
  console.error(err);
  process.exit(1);
})
