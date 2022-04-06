const env = require('hardhat')

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      key: env(KEYS),
      url: env(URLS),
      accounts: [
        env(ACCOUNTS),
      ],
    },
  },
}
