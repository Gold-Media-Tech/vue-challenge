<template>
  <a
    :href="'https://openlibrary.org/' + book.key"
    target="_blank"
    class="
      w-full
      border-t-2 border-gray-100
      font-medium
      text-gray-800
      py-4
      px-4
      block
      hover:bg-gray-200
      transition
      duration-150
    "
  >
    {{ book.title }}
    <span
      class="text-gray-500 text-sm font-normal"
      v-for="author in book.author_name"
      :key="book.author_name.indexOf(author)"
    >
      {{ author }},
    </span>
    <span class="text-gray-500 text-sm font-medium">
      {{ book.first_publish_year }}
    </span>
  </a>
</template>
<script>
export default {
  props: ["book"],
};
</script>

