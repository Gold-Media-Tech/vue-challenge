<template>
  <div class="absolute bg-gradient-to-t from-black w-full">
    <div class="absolute w-full flex place-content-center">
      <p class="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-gray-700 mt-10">
        {{ title }}
      </p>
    </div>
    <div
      v-if="subTitle"
      class="absolute w-full flex place-content-center mt-20">
      <p class="font-sans text-center w-4/5 text-gray-500 text-xl mt-5">
        {{ subTitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "view",
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle : {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
