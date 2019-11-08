<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col xs="12" sm="6" md="6">
          <v-card class="pa-3">
            <v-subheader>Login</v-subheader>
            <v-divider :inset="false"></v-divider>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :counter="8"
              type="password"
              label="Password"
              required
            ></v-text-field>
            <v-btn @click="onLogin">Login</v-btn>
          </v-card>
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
          this.$router.push('/Inspire')
        })
    }
  }
}
</script>
