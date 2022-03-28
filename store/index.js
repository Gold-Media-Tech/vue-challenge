
export const actions = {
  async getBooks({  }, stringSearch) {
    let res = await this.$axios.get(`?q=${stringSearch}`)
    return res;
  }
}