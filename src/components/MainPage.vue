<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <GitlabParametersForm v-if="activateForm" v-on:updateParameters="updateParameters" />
        <div v-if="!activateForm">
          <ProgressChart :data="progressData" :width="700" />
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ProgressChart from './ProgressChart.js'
import GitlabParametersForm from './GitlabParametersForm'

export default {
  name: 'MainPage',
  components: { ProgressChart, GitlabParametersForm },
  props: {
    activateForm: Boolean
  },
  data () {
    return {
      gitlabParameters: {
        url: 'hello',
        userPersonalToken: "12345toto",
        projectId: 12345
      },
      projectsList: {},
      progressData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Expected',
            backgroundColor: '#4d94ff',
            data: [40, 39, 10, 40, 39, 54, 40]
          },
          {
            label: 'Actual',
            backgroundColor: '#00e600',
            data: [40, 39, 10, 40, 39, 23, 40]
          }
        ]
      }
    }
  },
  methods: {
    updateParameters (newParameters) {
      this.gitlabParameters = newParameters;
      this.$emit('updateUrl', newParameters.url)
    }
  },
  mounted: function () {
    this.GitLabAPI.get('projects', {}, [this.projectsList, 'projects'])
  },
  computed: {
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
