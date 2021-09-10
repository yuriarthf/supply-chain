const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Match any network id
        },
        rinkeby: {
            provider: () =>
                new HDWalletProvider({
                    mnemonic: {
                        phrase: process.env.MNEMONIC,
                    },
                    providerOrUrl: `wss://rinkeby.infura.io/ws/v3/${process.env.PROJECT}`,
                    shareNonce: true,
                }),
            network_id: "4",
            networkCheckTimeout: 10000,
        },
    },
    compilers: {
        solc: {
            version: "^0.8.6",
        },
    },
};
