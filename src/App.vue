<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title><v-btn flat @click="reload()">{{title}}</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="gitlabUrl">
        <v-btn flat>
          <v-icon left>dns</v-icon>
          {{gitlabUrl}}
          <v-icon right>create</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <MainPage v-on:updateUrl="updateUrl" :activateForm="activateForm"/>
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
      gitlabUrl: ''
    }
  },
  methods: {
    updateUrl (gitlabUrl) {
      this.gitlabUrl = gitlabUrl.split('/')[2]
    },
    reload () {
      location.href = "/";
    }
  },
  computed: {
    activateForm () {
      return !this.gitlabUrl
    }
  }
}
</script>
