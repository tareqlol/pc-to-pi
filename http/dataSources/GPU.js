var si = require('systeminformation');
var DataSourceClass = require('./DataSourceClass')
const csv = require('csvtojson')
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);
const params = [
  'name',
  'fan.speed',
  'memory.total',
  'memory.used',
  'utilization.gpu',
  'temperature.gpu',
  'power.draw',
  'clocks.gr',
  'clocks.sm',
  'clocks.mem',
  'clocks.video'
].join(',');
const gpuCommand = `nvidia-smi --format=csv --query-gpu=${params}`;
async function getGpuInfo() {
  try {
    const result = await execAsync(gpuCommand);
    const resultJson = await csv({flatKeys: true}).fromString(result.stdout)
    return resultJson[0];
  } catch (error) {
    console.log('Error during getting GPU info');
    return 'unknown';
  }
}
class GPUDataSource extends DataSourceClass {
  constructor () {
    super ('GPU')
  }

  subscribeToDataUpdate (fn) {
    this.startTick(async () => {
      let result = await getGpuInfo()
      fn(result)
    })
  }

}

module.exports = new GPUDataSource()