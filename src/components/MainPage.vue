<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
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
