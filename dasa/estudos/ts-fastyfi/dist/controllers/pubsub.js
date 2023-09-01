"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubsubPostMessage = exports.pubsubGetMessage = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
const projectId = "poc-dasa-functions-grafana"; // Your Google Cloud Platform project ID
const topicName = "my-topic2";
const data = JSON.stringify({ animal: "Qualquer Inserção" });
const serviceAccount = `./poc-dasa-functions-grafana-06aaab712860.json`;
const pubsub = new pubsub_1.PubSub({
    projectId,
    keyFilename: serviceAccount,
});
const subscriptionNameOrId = "my-sub-2";
const timeout = 5;
function pubsubGetMessage() {
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
        //pubsubRoute(messageData);
    };
    // Listen for new messages until timeout is hit
    subscription.on("message", messageHandler);
    // Wait a while for the subscription to run. (Part of the sample only.)
    setTimeout(() => {
        subscription.removeListener("message", messageHandler);
        console.log(`${messageCount} message(s) received.`);
    }, timeout * 1000);
}
exports.pubsubGetMessage = pubsubGetMessage;
const pubsubPostMessage = async (request, reply) => {
    const dataBuffer = Buffer.from(data);
    try {
        const messageId = pubsub
            .topic(topicName)
            .publishMessage({ data: dataBuffer });
        console.log(`Message ${messageId} published.`);
    }
    catch (error) {
        console.error(`Received error while publishing:`);
        process.exitCode = 1;
    }
};
exports.pubsubPostMessage = pubsubPostMessage;
