const { kafka } = require("kafka_client");
const group = process.argv[2];
const topic = process.argv[3];
var myTopic;
async function init() {
    console.log("input value ",group)
    console.log("input value 3",topic)
    if (topic==undefined){
        console.log("Please enter topic name")
        return
    }else{
        myTopic =[topic]
    }
    
  const consumer = kafka.consumer({ groupId: group });
  await consumer.connect();

  await consumer.subscribe({ topics: myTopic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group}: [${topic}]: PART:${partition}:`,
        message.value.toString()
      );
    },
  });
}

init();