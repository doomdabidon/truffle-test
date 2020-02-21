const PrivateKeyProvider = require('truffle-privatekey-provider');

module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",     
     port: 56453,     
     network_id: "*", 
    //  gas: 8500000,         // Gas sent with each transaction (default: ~6700000)
    //  gasPrice: 20000000000,
     provider: () =>
     new PrivateKeyProvider(
       'bb54068aea85faa7e487530083366be9962390af822e4c71ef1aca7033c83e66',
       'http://127.0.0.1:56453'
     )
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
