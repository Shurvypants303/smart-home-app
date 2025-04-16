// // src/useMqtt.js
// import { useEffect, useRef } from 'react';
// import mqtt from 'mqtt';

// const useMqtt = () => {
//   const clientRef = useRef(null);

//   useEffect(() => {
//     const client = mqtt.connect('wss://broker.hivemq.com:8884/mqtt');
//     clientRef.current = client;

//     client.on('connect', () => {
//       console.log('✅ Connected to HiveMQ broker');
//     });

//     client.on('error', (err) => {
//       console.error('❌ MQTT Error:', err);
//     });

//     client.on('message', (topic, message) => {
//       console.log(`📩 Message received [${topic}]: ${message.toString()}`);
//     });

//     return () => {
//       client.end();
//     };
//   }, []);

//   const publish = (topic, message) => {
//     if (clientRef.current?.connected) {
//       clientRef.current.publish(topic, message);
//       console.log(`📤 Sent: "${message}" to topic "${topic}"`);
//     }
//   };

//   const subscribe = (topic) => {
//     clientRef.current?.subscribe(topic, (err) => {
//       if (!err) {
//         console.log(`🧷 Subscribed to topic: ${topic}`);
//       }
//     });
//   };

//   return { publish, subscribe };
// };

// export default useMqtt;