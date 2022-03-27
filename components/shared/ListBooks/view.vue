<template>
  <section>
    <div class="grid sm:grid-cols-6 gap-5 grid-cols-2">
      <div v-for="book in books" :key="book.key">
        <shared-book-view :book="book"/>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  name: 'list-books',
  props: {
    books : {
      type:  [Array, Object],
      required: true
    }
  }
}
</script>
