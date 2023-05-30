const config = {
  dev: {
    BLOCKCHAIN_URL: "https://blockchain.info",
    TRANSACTION_URL: "https://api.blockcypher.com/v1/btc/test3",
    WS_URL: "wss://socket.blockcypher.com/v1/btc/test3",
  },
  prod: {
    BLOCKCHAIN_URL: "https://blockchain.info",
    TRANSACTION_URL: "https://api.blockcypher.com/v1/btc",
    WS_URL: "wss://socket.blockcypher.com/v1/btc/main",
  },
};

export default config;

export const ENV = "prod";
export const MOCK_DATA = true;
