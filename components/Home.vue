<template>
    <div class="search">
        <div class="search-title">
            <h1>Search Books</h1>
        </div>
        <div class="search-search">
            <input type="text" name="search" v-model="searchText" :placeholder="placeholder" :disabled="loading">
            <button :disabled="!searchText || searchText==='' || loading" @click="getBooks()">Search</button>
        </div>
        <div class="search-searching" v-if="loading">
          {{'Searching..........'}}
        </div>
        <div class="search-books">
          <ul>
            <li v-for="book in books" :key="book.key">
              {{`${book.title} - ${book.author_name}`}}
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      placeholder:'Please enter a text to search',
      searchText: '',
      books: [],
      loading: false
    }
  },
  methods:{
    async getBooks(){
      this.loading = true
      let searchTemp = this.searchText.replaceAll(' ', '+')
      let res = await this.$store.dispatch("getBooks", searchTemp)
      this.books = res.data.docs
      this.loading = false
    }
  }
}
</script>
<style scoped>
  .search{
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;
    background: rgb(232, 234, 238);
  }
  .search-title{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .search-search{
    display: flex;
    justify-content: center;
  }
  .search-search input{
    height: 40px;
    width: 400px;
    padding: 1rem;
    border-radius: 5px;
    margin-right: 1rem;
  }
  .search-search button{
    height: 40px;
    width: 100px;
    background: #2662b3;
    border-radius: 5px;
    color: white;
    font-weight: 700;
  }
  .search-search input:disabled{
    background: #dddddd;
    border: black;
  }
  .search-search button:disabled{
    background: #dddddd;
  }
  .search-searching{  
    height: 30px;
    width: 100%;
    background: #3033c9be;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    color: white;
  }
.search-books{
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.search-books ul{
  text-align: center;
}

</style>