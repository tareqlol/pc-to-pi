var si = require('systeminformation');
var DataSourceClass = require('./DataSourceClass')

class MemoryDataSource extends DataSourceClass {
  constructor () {
    super ('MEMORY')
  }

  subscribeToDataUpdate (fn) {
    this.startTick(async () => {
      let { total, free, used, available } = await si.mem()
      fn({
        total,
        free,
        used,
        available
      })
    })
  }

}

module.exports = new MemoryDataSource()