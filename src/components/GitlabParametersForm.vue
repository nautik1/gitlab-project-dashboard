<template>
  <v-form @submit="submit" ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="newParams.url"
      name="url"
      v-validate="urlValidation"
      :error-messages="errors.collect('url')"
      label="Gitlab instance URL"
      required
    ></v-text-field>
    <v-text-field
      type="number"
      name="projectId"
      v-model="newParams.projectId"
      label="Project ID"
      required
    ></v-text-field>
    <v-text-field
      v-model="newParams.userPersonalToken"
      name="personalToken"
      label="User personal token"
      required
    ></v-text-field>
    <v-btn
      type="submit"
      :disabled="!valid"
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
      },
      valid: true,
      urlValidation: {
        required: true,
        url: {
          require_protocol: true
        }
      }
    }
  },
  methods: {
    submit (e) {
      if (this.$refs.form.validate()) {
        e.preventDefault()
        return this.$emit('updateParameters', this.newParams)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
