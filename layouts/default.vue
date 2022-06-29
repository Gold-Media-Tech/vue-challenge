<template>
  <v-app dark>

        <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
       
          :src="require(`assets/open-book-svgrepo-com.svg`)"
          transition="scale-transition"
          width="40"
        />

       
      </div>


    
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
   
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" >

input{ 
margin-left: 10px !important;
}

@font-face {
  font-family: muli;
  src: url("./assets/font/Muli.ttf");
}
@font-face {

  font-family: Montserrate;
  src: url("./assets/font/MontserratAlternates-Medium.ttf");
}

</style>