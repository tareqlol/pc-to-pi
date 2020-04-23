<template>
  <div class="block pre">
    <h5 class="block__header"><span>Weather</span></h5>
    <img :src="data.iconUrl" :alt="data.weatherDescription">
    City: {{ data.city }}
    Weather: {{ data.weather }}, {{ data.weatherDescription }}
    Temperature: {{ data.temp }}°C
    Feels Like: {{ data.feelsLike }}°C
    Wind Speed: {{ data.windSpeed }}K/H
    <h5 class="block__footer"></h5>
  </div>
</template>

<script>
module.exports = {
  name: 'weather',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    name: function () {
      let { weatherDetails } = this.data
      return weatherDetails && `${weatherDetails.manufacturer} ${weatherDetails.brand} @ ${weatherDetails.speed} Ghz`
    },
    temperature: function () {
      let { weatherTemperature } = this.data
      return weatherTemperature && `${weatherTemperature}°C`
    },
    loadPercentage: function () {
      return this.data.weatherLoad && this.data.weatherLoad.toFixed(0)
    }
  },
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  img{
    filter: blur(0.8px);
    float: right;
  }
  .pre{
    white-space: pre-line
  }
</style>