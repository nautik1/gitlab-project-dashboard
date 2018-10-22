<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title><v-btn flat @click="reload()">{{title}}</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!toggleForm && gitlabHostname">
        <v-btn flat @click="toggleForm = !toggleForm">
          <v-icon left>dns</v-icon>
          {{gitlabHostname}}
          <v-icon right>create</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <MainPage v-on:updateUrl="updateUrl" :toggleForm="toggleForm"/>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage'

export default {
  name: 'App',
  components: {
    MainPage
  },
  data () {
    return {
      title: 'Gitlab project dashboard',
      gitlabHostname: '',
      toggleForm: true
    }
  },
  methods: {
    updateUrl (gitlabUrl) {
      this.gitlabHostname = new URL(gitlabUrl).hostname
      this.toggleForm = !this.toggleForm
    },
    reload () {
      location.href = "/";
    }
  }
}
</script>
