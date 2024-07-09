module.exports = ({ env }) => ({
    host: env('tobemodified'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array("APP_KEYS", ["tobemodified", "tobemodified"]),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  });
  
