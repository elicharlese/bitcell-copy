const kyberMainnet = require('./kyber-mainnet.json');
const uniswapMainnet = require('./uniswap-mainnet.json');
const dydxMainnet = require('./dydx-mainnet.json');
const tokensMainnet = require('./tokens-mainnet.json');
const maticMainnet = require('./matic-mainnet.json');

module.exports = {
  mainnet: {
    kyber: kyberMainnet,
    uniswap: uniswapMainnet,
    dydx: dydxMainnet,
    matic: maticMainnet,
    tokens: tokensMainnet
  }
};
