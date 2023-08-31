import Fastify  from "fastify";
import dbConnector from "./config/our-db-connector.js";
import firstRoute from "./rotas/our-first-route.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(dbConnector);
fastify.register(firstRoute);

// Run the server!
fastify.listen({ port: 3000 }, async (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});