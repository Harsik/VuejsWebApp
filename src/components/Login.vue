<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="8"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-btn @click="onLogin">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { login } from './APIUtils'

export default {
  data: () => ({
    password: '',
    passwordRules: [
      v => !!v || 'password is required',
      v => v.length >= 8 || 'password must be at least 8 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    onLogin () {
      this.isLoading = true
      localStorage.email = this.email
      let loginRequest = {
        email: this.email,
        password: this.password
      }
      login(loginRequest)
        .then(response => {
          localStorage.accessToken = response.accessToken
          this.$emit('sendAuthentication', true)
          this.$router.push('/InspireView')
        })
    }
  }
}
</script>
