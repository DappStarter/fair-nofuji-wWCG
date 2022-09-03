require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food tragic rebel stick essay coral light army general'; 
let testAccounts = [
"0x5cdcf90eb6359a337e3e3efe67d65bfc6ebeaccd4987764ab032199bdc9aeca2",
"0x7431144ed9c7957c07024c156ea7a409bd9ee37349f2e7e299dfa43862540d3f",
"0xcd31fb51c4e625a741fd92940a35eea1ec661d8e81efe5f3adc2fbd3cc16edda",
"0x673b8f83c998cbbe676ede87aa64a56a52bf8c39a20dda2f48d5e64cee048704",
"0xb85f95e8d3a1dc33db78a6a8bfc94471a8f01c5ec09df6f4b64708cf3f5245be",
"0x6bf5111943e04fe73fccd016a024dc5b4d8c21b076702114ccc31c328e74194d",
"0xedb9538df3259b03eb4434000f72e4dc2088d972a9f620c9eeda1dfa65082acd",
"0xc0b0c8404d2c8e785b11bc75506c722ad8973b7be6fe76eaa8ec26b08a5488dd",
"0xa37e275a72061c09ec81c93ecaa45e0379a9920aaad07cf33fefb2af88294785",
"0xcf0c12746dddd0a2ba7cdbd28fc4ea319bfe920273796e87dac0ebe90c7a83a1"
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

