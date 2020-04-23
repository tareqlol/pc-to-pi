class DataSourceClass {
  constructor (name) {
    this.name = name
  }
  startTick (cb, interval = (process.env.refreshDataSeconds * 1000) || 5000) {
    setTimeout(cb, 0)
    return setInterval(cb, interval);
  }
}

module.exports = DataSourceClass