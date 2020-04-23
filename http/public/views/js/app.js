import Vue from '/web_modules/vue/dist/vue.esm.browser.js'
import httpVueLoader from '/web_modules/http-vue-loader/src/httpVueLoader.js'

const App = new Vue({
  el: '#app',

  components: {
    'app': httpVueLoader('/views/js/app.vue')
  },
})

export default App;