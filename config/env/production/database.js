module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', 'monorail.proxy.rlwy.net'),
        port: env.int('PGPORT', 16209),
        database: env('PGDATABASE', 'railway'),
        user: env('PGUSER', 'postgres'),
        password: env('PGPASSWORD', 'rpPsGMkcvIfhSWkUtdvfXFPWjQHdqyip'),
        ssl: env.bool(true),
      },
    },
  });