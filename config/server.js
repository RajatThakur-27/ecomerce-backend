module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["OAbYOlwWPJl3fiY9k9wwJA", "JzzViDGR86rJ11Fv434beg"]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

// module.exports = ({ env }) => ({
//   proxy: true,
//   url: env('dpg-cq1lmc5ds78s73elhi20-a.oregon-postgres.render.com'), // Sets the public URL of the application.
//   app: {
//     keys: env.array('APP_KEYS')
//   },
// });
