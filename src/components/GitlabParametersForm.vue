<template>
  <v-form @submit="submit">
    <v-text-field
      v-model="newParams.url"
      label="Gitlab instance URL"
      required
    ></v-text-field>
    <v-text-field
      type="number"
      v-model="newParams.projectId"
      label="Project ID"
      required
    ></v-text-field>
    <v-text-field
      v-model="newParams.userPersonalToken"
      label="User personal token"
      required
    ></v-text-field>
    <v-btn
      type="submit"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'GitlabParametersForm',
  props: {
    gitlabVisibleParameters: Object
  },
  data () {
    return {
			newParams: {
        url: this.gitlabVisibleParameters.url,
        projectId: this.gitlabVisibleParameters.projectId,
      }
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()
      return this.$emit('updateParameters', this.newParams)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
