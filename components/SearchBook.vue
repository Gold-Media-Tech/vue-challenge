<template>
  <div class="search-books">
    <div class="title">
      <h2>Search and list of books</h2>
    </div>
    <div class="search-action">
      <input placeholder="Type text" v-model="search" />
      <button type="button" :disabled="search.length < 3" @click="searchBooks">
        {{ !loading ? "Search" : "Loading" }}
      </button>
    </div>
    <div v-if="results.length" class="results">
      <div v-for="(book, index) in results" :key="index" class="card">
        <div class="card-title">
          <strong>Title: </strong>{{ book.title_suggest }}
        </div>
        <div class="card-type">Type: {{ book.type }}</div>
      </div>
    </div>
    <div v-else-if="notFound" class="not-found">
      <h3>Not found!! :(</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      results: [],
      loading: false,
      notFound: false,
    };
  },
  async mounted() {
    await this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=vailability&limit=10`
        );
        this.results = response.data.docs;
      } catch (err) {
        console.log(err);
      }
    },
    async searchBooks() {
      try {
        this.loading = true;
        const response = await axios.get(
          `https://openlibrary.org/search.json?title=${this.search}`
        );
        this.results = response.data.docs;
        this.loading = false;
        this.notFound = true;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
  },
};
</script>

<style>
.search-books {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
.search-action {
  margin-top: 10px;
  text-align: center;
}
input {
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 15px;
}
button {
  width: 200px;
  height: 50px;
  background: #27884d;
  color: #fff;
  font-weight: 800;
  font-size: 18px;
  border-radius: 10px;
}
button:disabled {
  background: #bababb;
  border: 1px solid #bababb;
}
.results {
  display: flex;
  max-width: 800px;
  flex-wrap: wrap;
  padding-top: 12px;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  width: 200px;
  margin: 12px;
  transition: 0.15s all ease-in-out;
  height: 150px;
}
.card-title {
  font-size: 14px;
  padding: 10px;
  display: block;
  display: -webkit-box;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 65px;
}
.card-type {
  background: cornflowerblue;
  color: #fff;
  font-weight: 300;
  text-align: center;
  font-size: 12px;
  width: 100px;
  height: 20px;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 10px;
}
.not-found {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 800;
  color: #d2691e;
}
</style>
