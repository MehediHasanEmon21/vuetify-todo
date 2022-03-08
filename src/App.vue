<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer" :mobile-breakpoint="768">
       <v-img
        class="pa-4 pt-7"
        src="mountains.jpg"
        height="170"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar size="70" class="mb-2">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Danny Connell"
          >
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Mehedi Emon
        </div>
        <div class="white--text text-subtitle-2">
          mehedi__emon
        </div>
      </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      color="primary"
      dark
      src="mountain.png"
      height="170"

    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0 header-container">

        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-bar/>
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-3">{{ $store.state.appTitle }}</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>

      </v-container>

      
      

    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar></snackbar>
    </v-main>
  </v-app>
</template>

<script>
import snackbar from './components/Shared/Snackbar.vue'
import SearchBar from './components/Tools/SearchBar.vue'
import LiveDateTime from './components/Tools/LiveDateTime.vue'
  export default {
  
    name: 'App',
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-view-dashboard', to:"/" },
          { title: 'About', icon: 'mdi-help-box', to:"/about" },
        ],
      }),
      components: {
        snackbar,SearchBar,LiveDateTime
      }
  }
</script>

<style lang="sass">
  .header-container
    max-width: none
</style>


