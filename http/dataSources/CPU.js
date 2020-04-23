var si = require('systeminformation');
var DataSourceClass = require('./DataSourceClass')

class CpuDataSource extends DataSourceClass {
  constructor () {
    super ('CPU')
  }

  subscribeToDataUpdate (fn) {
    this.startTick(async () => {
      let cpuDetails = await si.cpu();
      let { main: cpuTemperature } = await si.cpuTemperature()
      let { currentload: cpuLoad } = await si.currentLoad()
      fn({
        cpuDetails,
        cpuTemperature,
        cpuLoad
      })
    })
  }

}

module.exports = new CpuDataSource()