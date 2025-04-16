// // src/MqttClient.js
// import mqtt from 'mqtt';

// const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');

// client.on('connect', () => {
//   console.log('✅ Connected to HiveMQ');
// });

// export const sendPlugCommand = (room, state) => {
//   const topic = `smart-home/device/${room}`;
//   client.publish(topic, state); // state = 'on' or 'off'
//   console.log(`Sent "${state}" to "${topic}"`);
// };

// let currentTempCallback = null;

// export const setTempCallback = (cb) => {
//   currentTempCallback = cb;
// };

// client.on('message', (topic, message) => {
//   if (topic === 'smart-home/temperature/dungeon' && currentTempCallback) {
//     currentTempCallback(message.toString());
//   }
// });

// client.on('connect', () => {
//   client.subscribe('smart-home/temperature/dungeon');
//   console.log('✅ Subscribed to dungeon temp');
// });
