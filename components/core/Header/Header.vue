<template>
  <section>
    <nav class="p-6">
      <div class="flex justify-between items-center">
        <div class="flex justify-between items-center">
          <h1
            class="pr-6 cursor-pointer border-r-2 text-2xl font-bold text-gray-800 ">
            {{ appName }}
          </h1>
        </div>
        <div v-if="links.length" class="flex space-x-6">
          <span
            v-for=" { title, route }  in links"
            class="span-link"
            @click="goToRoute(route)"
          >
            {{ title }}
          </span>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>

export default {
  name: "Header",
  props: {
    appName : {
      type: String,
      required: true
    },
    links:{
      type : Array,
      required: false,
      default: []
    }
  },
  methods: {
    goToRoute ( route ) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

.span-link {
  @apply text-gray-500 cursor-pointer text-xl hover:text-gray-800 hover:underline;
}

</style>
