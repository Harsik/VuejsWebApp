<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item :to="navMenu.to" :key="i" v-for="(navMenu, i) in navMenus">
          <v-list-item-content>
            <v-list-item-title v-text="navMenu.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.native.stop="drawer = !drawer" :disabled="!isAuthenticated"></v-app-bar-nav-icon>
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
              <v-btn v-on="on" icon>
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
      <router-view @sendAuthentication="setAuthentication"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    isAuthenticated: false,
    subMenus: [
      { title: 'Profile', to: '/profile' },
      { title: 'Logout', to: '/logout' }
    ],
    navMenus: [
      { title: 'Welcome', to: '/' },
      { title: 'Inspire', to: '/Inspire' },
      { title: 'FileList', to: '/FileList' }
    ]
  }),
  methods: {
    setAuthentication (bool) {
      this.isAuthenticated = bool
    }
  }
}
</script>
