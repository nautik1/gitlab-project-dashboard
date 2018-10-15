import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import VueResource from 'vue-resource'
import GitLabAPI from 'vue-gitlab-api'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(GitLabAPI)

new Vue({
  render: h => h(App)
}).$mount('#app')
