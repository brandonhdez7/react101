const os = require('os');
// console.log(os)

const cpus = os.cpus();
// console.log(cpus);
const freeMem = os.freemem();
// console.log(freeMem)
const nI = os.networkInterfaces();
console.log(nI)