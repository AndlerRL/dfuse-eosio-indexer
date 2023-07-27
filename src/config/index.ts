export const serverEnv = {
  dfuse: {
    apiKey: process.env.DFUSE_API_KEY,
    rpc: process.env.DFUSE_API_RPC,
  },
  contracts: process.env.WHITELIST_CONTRACTS.split(',') || [],
  actions: process.env.WHITELIST_ACTIONS.split(',') || [],
  db: {
    connectionString: process.env.INDEXER_DB_CONNECTION_STRING,
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
  },
}