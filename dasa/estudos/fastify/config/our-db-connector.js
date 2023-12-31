import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";

async function dbConnector(fastify, options) {
  fastify.register(fastifyMongo, {
    url: "mongodb+srv://brenopinto:mnJ8iPnn8Zz4o5Vj@nodeexpress.nkeyra2.mongodb.net/alura-node",
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
export default fastifyPlugin(dbConnector);
