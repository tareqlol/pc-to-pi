<template>
  <div class="block">
    <h5 class="block__header"><span>CPU</span></h5>
    {{ name }}
    {{ temperature }}
    <div class="load">
      <div class="load__bar" :style="{width: loadPercentage + '%'}">
        <span>{{ loadPercentage }}%</span>
      </div>
    </div>
    <h5 class="block__footer"></h5>
  </div>
</template>

<script>
module.exports = {
  name: 'cpu',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    name: function () {
      let { cpuDetails } = this.data
      return cpuDetails && `${cpuDetails.manufacturer} ${cpuDetails.brand} @ ${cpuDetails.speedmax} Ghz`
    },
    temperature: function () {
      let { cpuTemperature } = this.data
      return cpuTemperature && `${cpuTemperature}°C`
    },
    loadPercentage: function () {
      return this.data.cpuLoad && this.data.cpuLoad.toFixed(0)
    }
  },
  data: function () {
    return {}
  }
}
</script>

<style>

</style>