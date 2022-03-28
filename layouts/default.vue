<template>
  <body class="bg-white">
  <core-header :app-name="appName" :links="links"/>
  <main class="py-16 container mx-auto px-6 md:px-0">
    <Nuxt/>
  </main>
  </body>
</template>

<script>
const {APPNAME} = require("~/constants/constants");

export default {
  name: "default",
  data: () => ({
    appName: APPNAME,
    links: [
      {
        title : 'Search',
        route : '/'
      },
      {
        title : 'My Favorites',
        route : '/favorites'
      }
    ]
  })
}
</script>

<style scoped>

</style>
