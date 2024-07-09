module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', 'tobemodified'),
        port: env.int('PGPORT', 'tobemodified'),
        database: env('PGDATABASE', 'tobemodified'),
        user: env('PGUSER', 'tobemodified'),
        password: env('PGPASSWORD', 'tobemodified'),
        ssl: env.bool(true),
      },
    },
  });
