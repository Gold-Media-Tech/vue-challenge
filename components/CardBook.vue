<template>
  <div>
    <v-row class="justify-center pa-0 ma-0" style="width: 100%">
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
        v-for="(item, index) in book"
        :key="index"
        class="ma-0 align-center d-flex justify-center"
      >
        <template>
          <v-card
            class="mx-auto card__show--caricatura elevation-4"
            style="
              cursor: pointer;
              border-radius: 16px;
              background: var(--card__fondo);
            "
            outlined
            ripple
             @click="handleClick(modal, item)"
          >
            <v-row class="pa-0 ma-0 justify-center">
              <v-col
                cols="4"
                md="4"
                style="background: #eaeaea"
                class="pa-0 d-text-center justify-content-center align-center"
              >
                <div
                  class="Avatar__favorito--btn"
                  v-for="(imagen, j) in item.isbn"
                  :key="j"
                >
                  <img
                    v-if="j == 0"
                    :src="`https://covers.openlibrary.org/b/isbn/${imagen}-M.jpg`"
                    width="100%"
                    class="favorite__caricatur pa-0 ma-0"
                    style="border-radius: 10px !important"
                    shadow-4
                  />
                </div>
              </v-col>

              <v-col cols="8" md="8" class="pa-0 ma-0">
                <v-list flat subheader three-line>
                  <v-list-item two-line class="pa-0 ma-0 ml-3">
                    <v-list-item-content class="pa-0 ma-0 mt-0">
                      <div style="line-height: 17px" class="ma-1">
                        <v-list-item-subtitle style="">
                          Titulo :
                        </v-list-item-subtitle>
                        <v-list-item-subtitle
                          class=""
                          style="color: #4abc96; font-weight: bold"
                        >
                          {{ item.title }}
                        </v-list-item-subtitle>
                      </div>

                      <div style="line-height: 12px" class="ma-1">
                        <v-list-item-subtitle style="">
                          Autor:
                        </v-list-item-subtitle>
                        <v-list-item-content
                          two-line
                          v-for="(author, j) in item.author_name"
                          :key="j"
                          class="texto__card--sublocation pa-0 ma-0"
                        >
                          <span
                            v-if="j == 0"
                            class="texto__card--subdescription"
                            >{{ author }}</span
                          >
                        </v-list-item-content>
                      </div>

                      <div style="line-height: 12px" class="ma-1">
                        <v-list-item-subtitle class="" style=""
                          >Lenguaje
                        </v-list-item-subtitle>
                        <v-list-item-content
                          v-for="(lenguage, k) in item.language"
                          :key="k"
                          class="texto__card--sublocation pa-0 ma-0"
                        >
                          <span
                            class="texto__card--subdescription"
                            v-if="k == 1"
                          >
                            {{ lenguage }}</span
                          >
                        </v-list-item-content>
                      </div>

                      <div style="line-height: 12px" class="ma-1">
                        <v-list-item-subtitle class="" style=""
                          >publicado por primera vez en
                        </v-list-item-subtitle>
                        <v-list-item-content
                          v-for="(fecha, w) in item.publish_date"
                          :key="w"
                          class="texto__card--sublocation pa-0 ma-0"
                        >
                          <span
                            v-if="w == 0"
                            class="texto__card--subdescription"
                          >
                            {{ fecha }}</span
                          >
                        </v-list-item-content>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  
  props: {
    modal: Boolean,
    book: {
      type: Array,
      required: false,
      default: () => [
        {
          title: "Consumo de Api Axios - Vue Vuetify",
          author_name: ["Serrano kristian"],
          language: ["vue, vuetify..", "vue, vuetify.."],
          publish_date: ["septiembre de 2021.", "eptiembre de 2021.s."],
          isbn: ["9780552994101", "0342101870"],
        },
        {
          title: "Cards de prueba",
          author_name: ["Serrano kristian"],
          language: ["vue, vuetify..", "vue, vuetify.."],
          publish_date: ["septiembre de 2021.", "eptiembre de 2021.s."],
          isbn: ["0342101870", "0342101870"],
        },
        {
          title: "Cards de prueba",
          author_name: ["Serrano kristian"],
          language: ["vue, vuetify..", "vue, vuetify.."],
          publish_date: ["septiembre de 2021.", "eptiembre de 2021.s."],
          isbn: ["0342101870", "0342101870"],
        },
      ],
    },
  },
  data(){
    return{
        model: true,
    }
  },
  methods: {
    handleClick(){
      return this.$emit("modalon", this.model, this.book);
    }
  }
};
</script>

<style lang="scss" scoped>
.texto__card--subdescription {
  font-family: muli;
  color: #333333;
  font-weight: bold;
}
</style>
