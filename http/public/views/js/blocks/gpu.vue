<template>
  <div class="block">
    <h5 class="block__header"><span>GPU</span></h5>
    {{ name }} @ {{ totalMemory }} | {{ temperature }} | {{currentClock}} | {{usedMemory}}/{{totalMemory}}<br>
    <div class="load">
      <div class="load__bar" :style="{width: loadPercentage}">
        <span>{{ loadPercentage }}</span>
      </div>
    </div>
    <h5 class="block__footer"></h5>
  </div>
</template>

<script>
module.exports = {
  name: 'gpu',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    name: function () {
      let { name } = this.data
      return name
    },
    totalMemory: function () {
      return this.getValueByProp('memory.total')
    },
    usedMemory: function () {
      return this.getValueByProp('memory.used')
    },
    currentClock: function () {
      return this.getValueByProp('graphics')
    },
    temperature: function () {
      return this.getValueByProp('temperature') + "°C"
    },
    loadPercentage: function () {
      let value = this.getValueByProp('utilization')
      return value && value.replace(' ', '')
    },
    powerDraw: function () {
      let value = this.getValueByProp('power')
      return value
    },
    fanSpeed: function () {
      let value = this.getValueByProp('fan')
      return value
    }
  },
  data: function () {
    return {}
  },
  methods: {
    getValueByProp (prop) {
      let key = Object.keys(this.data).find(k => k.includes(prop))
      return this.data[key]
    }
  }
}
</script>

<style>

</style>