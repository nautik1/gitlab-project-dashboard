<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <GitlabParametersForm 
          :gitlabVisibleParameters="gitlabVisibleParameters"
          v-if="toggleForm" 
          v-on:updateParameters="updateParameters" />
        <div 
          v-if="!toggleForm">
          <ProgressChart :data="progressData()" :width="700" />
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ProgressChart from './ProgressChart.js'
import GitlabParametersForm from './GitlabParametersForm'
import GitlabIssuesService from '../services/GitlabIssuesService.js'

export default {
  name: 'MainPage',
  components: { ProgressChart, GitlabParametersForm },
  props: {
    toggleForm: Boolean
  },
  data () {
    return {
      gitlabParameters: {
        url: 'https://gitlab.com',
        userPersonalToken: '',
        projectId: 12345
      },
      projectsList: {}
    }
  },
  methods: {
    updateParameters (newParameters) {
      this.gitlabParameters = newParameters;
      this.$emit('updateUrl', newParameters.url)
    },
    progressData () {
      return GitlabIssuesService.getStatisticsFromData()
    },
  },
  computed: {
    gitlabVisibleParameters () {
      return {
        url: this.gitlabParameters.url,
        projectId: this.gitlabParameters.projectId
      }
    },
    projectsCount: function () {
      if (this.myGitLabData.projects) {
        return this.myGitLabData.projects.length
      }
      return 'none yet...'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
