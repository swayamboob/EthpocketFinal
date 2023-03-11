// https://eth-goerli.g.alchemy.com/v2/uXGNiOKd3atQk8K8Nk6FjVko_U2SdPq9
require('@nomiclabs/hardhat-waffle');
module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      // url:'https://eth-goerli.g.alchemy.com/v2/uXGNiOKd3atQk8K8Nk6FjVko_U2SdPq9',
      // url: 'https://eth-goerli.g.alchemy.com/v2/BJbEnNmX5cBoSkpiGSf8jAbcIxeKMxF4',
      url: "https://eth-goerli.g.alchemy.com/v2/uXGNiOKd3atQk8K8Nk6FjVko_U2SdPq9",
      accounts:['dd55ea23c1e0cbc00dd9635c48e0216cf3afb79d828ff5b3c434cbeceef8ca64']
    }
  }
}