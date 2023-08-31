import { PubSub } from "@google-cloud/pubsub";
const projectId = "poc-dasa-functions-grafana"; // Your Google Cloud Platform project ID
const topicName = "my-topic2";
const data = JSON.stringify({ animal: "Qualquer Inserção" });
const serviceAccount = `./poc-dasa-functions-grafana-06aaab712860.json`;
const pubsub = new PubSub({
  projectId,
  keyFilename: serviceAccount,
});
function publishMessage() {
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  try {
    const messageId = pubsub
      .topic(topicName)
      .publishMessage({ data: dataBuffer });
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}

export default publishMessage;
