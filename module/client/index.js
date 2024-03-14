//const { kafka } = require("./src/connect");
const { Kafka } = require("kafkajs");


async function init() {
   var kafka = new Kafka({
        clientId: "",
        brokers: ["localhost:9092"],
      }); 
  const admin = kafka.admin();
  console.log("Admin connecting...");
 var isConnected= admin.connect();
  console.log("Admin Connection Success...", isConnected);

  
 
  

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}
init();