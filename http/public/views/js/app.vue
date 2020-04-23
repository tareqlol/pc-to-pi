<template>
<div class="screen">
  <cpu :data="cpu"></cpu>
  <gpu :data="gpu"></gpu>
  <memory :data="memory"></memory>
  <processes :data="processes"></processes>
  <weather :data="weather"></weather>
</div>
</template>

<script>
module.exports = {
  name: 'app',
  components: {
    cpu: httpVueLoader('/views/js/blocks/cpu.vue'),
    gpu: httpVueLoader('/views/js/blocks/gpu.vue'),
    memory: httpVueLoader('/views/js/blocks/memory.vue'),
    processes: httpVueLoader('/views/js/blocks/processes.vue'),
    weather: httpVueLoader('/views/js/blocks/weather.vue'),
  },
  data: function () {
    return {
      cpu: {},
      processes: {},
      memory: {},
      gpu: {},
      weather: {}
    }
  },
  mounted () {
    var socket = io();
    socket.on('data', ({ source, data }) => {
      this[source] = data
    })
  }
}
</script>

<style>

</style>