<template>
  <v-layout align-start justify-center row wrap>
    <v-flex xs12 sm6 md4>
      <v-card class="pa-3 ma-1">
        <div class="headline">
          <v-layout align-center justify-start>{{ profileText }}</v-layout>
          <v-divider></v-divider>
        </div>
        <v-form class="pa-3" ref="form">
          <v-text-field label="Email" v-model="email" :disabled="true"></v-text-field>
          <v-text-field label="Name" v-model="profile.name"></v-text-field>
          <v-text-field label="Bio" v-model="profile.bio"></v-text-field>
          <v-text-field label="Company" v-model="profile.company"></v-text-field>
          <v-text-field label="Address" v-model="profile.address"></v-text-field>
          <v-btn color="primary" @click="onEditProfile">Edit</v-btn>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { editProfile, loadProfile } from './APIUtils'
export default {
  data: () => ({
    profileText: 'Profile',
    email: localStorage.email,
    profile: {
      name: null,
      bio: null,
      company: null,
      address: null
    }
  }),
  mounted () {
    this.onLoadProfile()
  },
  methods: {
    onEditProfile () {
      const signupRequest = {
        email: this.email,
        name: this.profile.name,
        bio: this.profile.bio,
        company: this.profile.company,
        address: this.profile.address
      }
      editProfile(signupRequest)
        .then(() => {
          // this.onLoadProfile()
        })
        .catch(() => {
        })
    },
    onLoadProfile () {
      loadProfile(this.email)
        .then(response => {
          this.profile = response
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error)
          // this.errorAlarm()
        })
    }
  }
}
</script>
