module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "root",
      database: "admin_react",
      charset: "utf8",
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },
  staging: {},
  production: {}
};
