require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember unique grace creek flower gift'; 
let testAccounts = [
"0x6cc5da39a848b6ee61cacaec707fbb18a75daf0b662732b9d8f2f356adf73b56",
"0x65550022079fe2a7328ec1847c6d36a318c2e180fb284f0ab361aae27474beef",
"0xfbf53e582e7e81312fcf7cd990b4658a755444e0248a9c0962138cd5f1f4f6de",
"0x98a6561aee46373dc2d679c669a14c23b3884c6a05708cddb3217c28fabfd611",
"0x0d7251977d33066aa375eb0aa6f3e0701fbe768ecbd7dca2b2bba2bd5f27b5de",
"0x91644d1af042f7cafdd9a3a297080c3dfac8462819a4dcd1c05f639035268ec8",
"0x58757c221c486756e49ac0461bcad9c998c1c91b9f04efd49e5a17916edb338b",
"0x50f276176e1ff8603b4afb337a77439daa07aceab8f0b0bf07821b3cb734bfec",
"0x5a1725b7ec8c1a37eaa3884418f7a768d956798fced38ddcec6127c343f2e446",
"0x9a6d519f723243bf625b6ea926135897a41cd5bbff021fc339ddbf875f484654"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

