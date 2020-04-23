const cpuDataSource = require('../dataSources/CPU')
const processes = require('../dataSources/Processes')
const memory = require('../dataSources/Memory')
const Gpu = require('../dataSources/GPU')
const Weather = require('../dataSources/Weather')


const CPU = 'cpu'
const PROCESSES = 'processes'
const MEMORY = 'memory'
const GPU = 'gpu'
const WEATHER = 'weather'

module.exports = function (io) {
  io.on('connection', function(socket){

    cpuDataSource.subscribeToDataUpdate(function (data) {
      socket.emit('data', {
        source: CPU,
        data
      })
    })

    processes.subscribeToDataUpdate(function (data) {
      socket.emit('data', {
        source: PROCESSES,
        data
      })
    })

    memory.subscribeToDataUpdate(function (data) {
      socket.emit('data', {
        source: MEMORY,
        data
      })
    })

    Gpu.subscribeToDataUpdate(function (data) {
      socket.emit('data', {
        source: GPU,
        data
      })
    })

    Weather.subscribeToDataUpdate(function (data) {
      socket.emit('data', {
        source: WEATHER,
        data
      })
    })

  });
}