// src/MqttClient.js
import mqtt from 'mqtt';

const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');

client.on('connect', () => {
  console.log('✅ Connected to HiveMQ');
});

export const sendPlugCommand = (room, state) => {
  const topic = `smart-home/device/${room}`;
  client.publish(topic, state); // state = 'on' or 'off'
  console.log(`Sent "${state}" to "${topic}"`);
};
