import { PubSub } from "@google-cloud/pubsub";
const projectId = "poc-dasa-functions-grafana"; // Your Google Cloud Platform project ID
const topicName = "test-topic";
const serviceAccount = `./poc-dasa-functions-grafana-06aaab712860.json`;
const pubsub = new PubSub({
  projectId,
  keyFilename: serviceAccount,
});
function pubGurda(payloadGuarda) {
  const data = JSON.stringify(payloadGuarda);
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

export default pubGurda;
