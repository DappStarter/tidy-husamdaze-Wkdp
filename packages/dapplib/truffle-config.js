require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food mansion rifle mad prosper gesture spring equal gauge'; 
let testAccounts = [
"0x48509f28dab6705646952ff3109903f9bc074b1fb27fc12ac6400c9b38e0b67e",
"0x42feb0d09d512c57180c50335d0216c6ff0ee20bd7a8ac3c8d27c55523a12f89",
"0xc52867e1d0f0d9fd5434f93a54077c63f6e4a96e2228acc6393ab89806d6d33f",
"0x8473ea4f9a0caeaf56108afd7dac2ff894981b8b41d658625558f4a235e8cd6c",
"0x4a06a923b1ce31e28cf560e8d142edee5d7773838e4decfb0bde667f05e70c64",
"0x9fa7b30eebd0c2934f62bdcba849d641e0ae6ab950d57115c01c93d726dc2415",
"0xfefdda1eea1a8c388fd79d314a4cfd2d0db0cdf1ea72ef81ef260cba296b140c",
"0x487d0062b4993fea9d3f2b1efa097f1ad966b244fcefe74c992c9d228e09dfd3",
"0xd38283a0640a759a7c0d4ec7f1e652f4db38930f45862e356ade94c5e67bc270",
"0x7573bfeea8d8e3ad9270a6a6d463784fd3968d285ab4b329158fdf48c80cf984"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

