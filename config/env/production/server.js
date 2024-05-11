module.exports = ({ env }) => ({
    host: env('https://shopping-backend-toak.onrender.com', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array("APP_KEYS", ["471da6be1b857bf73f9daf74183490de", "5e82cf00dbc6541644f112480d70c268"]),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  });
  