<template>
  <v-form v-if="!gitlabURL || !userPersonalToken">
    <v-text-field
      v-model="gitlabURL"
      label="Gitlab instance URL"
      :rules="urlRules"
      required
    ></v-text-field>
    <v-text-field
      v-model="userPersonalToken"
      label="User personal token"
      required
    ></v-text-field>
    <v-text-field
      type="number"
      v-model="projectId"
      label="Project ID"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'GitlabParametersForm',
  components: {},
  props: {
    gitlabUrl: String,
    userPersonalToken: String,
    projectId: Number
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
