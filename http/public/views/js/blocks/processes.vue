<template>
  <div class="block">
    <h5 class="block__header"><span>PROCESSES</span></h5>
    <ul>
      <li v-for="process in data.list" :key="process.pid">
        <span>{{process.name}}</span> {{process.load}}
      </li>
    </ul>
    <h5 class="block__footer"></h5>
  </div>
</template>

<script>
module.exports = {
  name: 'processes',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
  },
  data: function () {
    return {}
  },
  methods: {
    formatToGigabytes (bytes) {
    }
  }
}
</script>

<style>

</style>