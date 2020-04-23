var si = require('systeminformation');
var DataSourceClass = require('./DataSourceClass')

class ProcessesDataSource extends DataSourceClass {
  constructor () {
    super ('PROCESSES')
  }

  subscribeToDataUpdate (fn) {
    this.startTick(async () => {
      let processes = await si.processes()
      fn(this.formatProcesses(processes))
    })
  }

  formatProcesses (processes) {
    let { all, runnning, list } = processes
    return {
      all, 
      runnning, 
      list: this.limit(this.sortByLoad(list)).map(p => ({
        name: p.name,
        load: p.pcpu,
        pid: p.pid
      }))
    }
  }

  sortByLoad (list) {
    return list.sort((p1, p2) => {
      return p2.pcpu - p1.pcpu
    })
  }

  limit (list) {
    return list.splice(0, 3)
  }

}

module.exports = new ProcessesDataSource()