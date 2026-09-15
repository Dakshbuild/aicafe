import * as brain from 'brain.js';

// Features:
// 1. Time of Day (Normalized 0-1, where 0 is 8AM and 1 is 8PM)
// 2. Day of Week (Normalized 0-1, 0 is Monday, 1 is Sunday)
// 3. Weather Condition (0 = Sunny, 0.5 = Cloudy, 1 = Rain)

// Label:
// Wait Time (Normalized 0-1, where 0 is 0 mins and 1 is 30 mins)

const trainingData = [
  // Sunny Days
  { input: [0.1, 0.2, 0], output: [0.3] }, // 9AM Wed Sunny -> ~9 mins
  { input: [0.3, 0.1, 0], output: [0.5] }, // 11AM Tue Sunny -> ~15 mins
  { input: [0.8, 0.8, 0], output: [0.8] }, // 5PM Sat Sunny -> ~24 mins
  { input: [0.9, 0.9, 0], output: [0.9] }, // 6PM Sun Sunny -> ~27 mins

  // Rainy Days (Longer waits usually)
  { input: [0.1, 0.2, 1], output: [0.5] }, // 9AM Wed Rain -> ~15 mins
  { input: [0.3, 0.1, 1], output: [0.7] }, // 11AM Tue Rain -> ~21 mins
  { input: [0.8, 0.8, 1], output: [0.9] }, // 5PM Sat Rain -> ~27 mins
  { input: [0.9, 0.9, 1], output: [1.0] }, // 6PM Sun Rain -> ~30 mins

  // Quiet hours
  { input: [0.0, 0.5, 0], output: [0.1] }, // 8AM Thu Sunny -> ~3 mins
  { input: [1.0, 0.1, 0], output: [0.1] }, // 8PM Tue Sunny -> ~3 mins
];

let net: brain.NeuralNetwork<number[], number[]> | null = null;

export function getMLModel() {
  if (!net) {
    net = new brain.NeuralNetwork<number[], number[]>({ hiddenLayers: [4] });
    net.train(trainingData, {
      iterations: 2000,
      log: false,
    });
  }
  return net;
}

export function predictWaitTime(timeOfDay: number, dayOfWeek: number, weather: number): number {
  const model = getMLModel();
  
  // Normalize inputs roughly
  const normTime = Math.max(0, Math.min(1, (timeOfDay - 8) / 12)); // Assuming 8AM to 8PM
  const normDay = Math.max(0, Math.min(1, dayOfWeek / 6)); // 0-6
  const normWeather = Math.max(0, Math.min(1, weather)); // 0-1

  const output = model.run([normTime, normDay, normWeather]) as number[];
  const normalizedWaitTime = output[0];
  
  // Denormalize to minutes (0 to 30 mins)
  const actualWaitTime = Math.round(normalizedWaitTime * 30);
  return Math.max(1, actualWaitTime); // Minimum 1 minute wait
}
