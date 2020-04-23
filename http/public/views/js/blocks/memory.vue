<template>
  <div class="block">
    <h5 class="block__header"><span>MEMORY</span></h5>
    {{ name }}
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
  name: 'memory',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    name: function () {
      let { total, free } = this.data
      return `${this.formatToGigabytes(free)}GB / ${this.formatToGigabytes(total)} GB`
    },
    loadPercentage: function () {
      let { total, free } = this.data
      return (((100 * free) / total).toFixed(0))
    }
  },
  data: function () {
    return {}
  },
  methods: {
    formatToGigabytes (bytes) {
      return bytes && (bytes / 1024 / 1024 / 1024).toFixed(2)
    }
  }
}
</script>

<style>

</style>