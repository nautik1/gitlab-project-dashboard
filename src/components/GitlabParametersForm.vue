<template>
  <v-form>
    <v-text-field
      v-model="newParams.url"
      label="Gitlab instance URL"
      required
    ></v-text-field>
    <v-text-field
      v-model="newParams.userPersonalToken"
      label="User personal token"
      required
    ></v-text-field>
    <v-text-field
      type="number"
      v-model="newParams.projectId"
      label="Project ID"
      required
    ></v-text-field>
    <v-btn
      @click="$emit('updateParameters', newParams)"
    >
      submit
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'GitlabParametersForm',
  data () {
    return {
			newParams: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
