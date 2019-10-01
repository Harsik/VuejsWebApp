<template>
  <v-layout align-start justify-center>
    <v-flex xs12 sm6></v-flex>
  </v-layout>
</template>

<script>
export default {
  mounted () {
    this.logout()
  },
  methods: {
    logout () {
      localStorage.accessToken = null
      this.$emit('sendAuthentication', false)
      this.$router.push('/login')
    }
  }
}
</script>
