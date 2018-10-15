<template>
  <v-container fluid>
    <v-form v-if="!gitlabURL || !userPrivateToken">
      <v-text-field
        v-model="gitlabURL"
        label="Gitlab instance URL"
        required
      ></v-text-field>
      <v-text-field
        v-model="userPrivateToken"
        label="User private token"
        required
      ></v-text-field>
    </v-form>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <p>Projects grabbed: {{ projectsCount }}</p>
        <ProgressChart :data="progressData" :width="700" />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ProgressChart from './ProgressChart.js'

export default {
  name: 'MainPage',
  components: { ProgressChart },
  props: {
    msg: String
  },
  data () {
    return {
      myGitLabData: {},
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
  mounted: function () {
    this.GitLabAPI.get('projects', {}, [this.myGitLabData, 'projects'])
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
