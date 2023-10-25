// eslint-disable-next-line no-undef
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line no-unused-vars, no-undef
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
          origin: ['*'],
        },
      },
  });
 
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();