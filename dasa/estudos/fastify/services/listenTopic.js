import { PubSub } from "@google-cloud/pubsub";
import pubsubRoute from "./pubsubRouter.js";
const projectId = "poc-dasa-functions-grafana"; // Your Google Cloud Platform project ID
const serviceAccount = `./poc-dasa-functions-grafana-06aaab712860.json`;
const pubsub = new PubSub({
  projectId,
  keyFilename: serviceAccount,
});
const subscriptionNameOrId = "my-sub-2";
const timeout = 5;

function listenForMessages() {
  const subscription = pubsub.subscription(subscriptionNameOrId);

  let messageCount = 0;
  const messageHandler = (message) => {
    // console.log(`Received message ${message.id}:`);
    // console.log(`\tData: ${message.data}`);
    // console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;
    const messageData = JSON.parse(message.data);
    console.log(messageData);
    message.ack();
    pubsubRoute(messageData);
  };

  // Listen for new messages until timeout is hit
  subscription.on("message", messageHandler);

  // Wait a while for the subscription to run. (Part of the sample only.)
  setTimeout(() => {
    subscription.removeListener("message", messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}

export default listenForMessages;
