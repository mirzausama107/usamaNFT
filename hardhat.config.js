require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});

const API_URL_KEY = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks : {
    polygon_amoy : {
      url: API_URL_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
  
};
