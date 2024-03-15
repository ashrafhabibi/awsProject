const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "",
  brokers: ["localhost:9092"],
});