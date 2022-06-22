import os from 'os';

export const getCPU = async () => {
  const cpusCount = os.cpus().length;
  const cpusModel = os.cpus()[0].model;
  console.log(`Total CPUs count: ${cpusCount}`);
  console.log(`CPU model: ${cpusModel}`);
  console.log(os.cpus().map(cpu => ({
    model: cpu.model,
    speed: cpu.speed > 1000 ? cpu.speed / 1000 + ' GHz' : cpu.speed / 10 + ' GHz'
  })));
}