<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!isAuthenticated">
        <v-btn to="/Login">Login</v-btn>
        <v-btn to="/Signup">Signup</v-btn>
      </v-toolbar-items>
       <v-toolbar-items v-if="isAuthenticated">
          <v-layout align-center justify-space-between>
            <v-menu bottom left offset-y>
      <template v-slot:activator="{ on }">
              <v-btn 
          v-on="on" icon>
                <v-icon large>mdi-dots-vertical</v-icon>
              </v-btn>
      </template>
              <v-list>
                <v-list-item v-for="(subMenu, i) in subMenus" :key="i" :to="subMenu.to">
                  <v-list-item-title>{{ subMenu.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-layout>
        </v-toolbar-items>
    </v-app-bar>

    <v-content>    
      <router-view
        @sendAuthentication="setAuthentication"
      >
              </router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    isAuthenticated: true,
    subMenus: [
      { title: 'Profile', to: '/profile' },
      { title: 'Logout', to: '/logout' }
    ]
  }),
  methods: {
    setAuthentication (bool) {
      this.isAuthenticated = bool
    }
  }
};
</script>
