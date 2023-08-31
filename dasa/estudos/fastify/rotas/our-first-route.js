import listenForMessages from "../services/listenTopic.js";
import publishMessage from "../services/publishMessage.js";
import pubGuarda from "../services/pubsubGuarda.js";
async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection("test_collection");

  fastify.get("/gliese", async (request, reply) => {
    try {
      await listenForMessages();
    } catch (err) {
      console.log("Erro na leitura da mensagem");
    }
  });

  fastify.get("/inputTopic", async (request, reply) => {
    try {
      await publishMessage();
    } catch (err) {
      console.log("Erro na mensagem");
    }
  });

  const animalBodyJsonSchema = {
    type: "object",
    required: ["animal"],
    properties: {
      animal: { type: "string" },
    },
  };

  const schema = {
    body: animalBodyJsonSchema,
  };

  fastify.post("/animals", { schema }, async (request, reply) => {
    // we can use the `request.body` object to get the data sent by the client
    const result = await collection.insertOne({ animal: request.body.animal });
    return result;
  });

  fastify.post("/filaGuarda", { schema }, async (request, reply) => {
    const result = request.body;
    try {
      await pubGuarda(result);
    } catch (err) {
      console.log("Erro na mensagem");
    }
    return result;
  });
}

export default routes;
