<template>
  <div>
    <v-row class="mt-8 justify-center pa-0 ma-0 " style="width:100%; ">
      <pre></pre>
      <v-col
        cols="12"
        md="10"
        lg="10"
        class=""
        :class="{
          'pa-0 ma-0 justify-center d-flex text-center':
            $vuetify.breakpoint.xsOnly,
        }"
      >
        <v-text-field
          placeholder="Ingrese el Nombre del libro"
          dense
          elevation-4
          light
          v-model.number="Crytonumero"
          :class="{ '': $vuetify.breakpoint.smAndUp }"
          name="is_review"
          class="  elevation-0 rounded-0  search-field"
          height="55px"
          background-color="#eaeaea"
          v-model="searchbook"
          @keyup.enter="$emit('tengo_resultados', searchbook)"
        >
          <template v-slot:prepend-inner class="">
            <v-select
              :items="items"
              menu-props="auto"
              dense
              solo
              height="55"
              flat
              width="30"
              single-line
              filled
              v-model="e1"
              class="text-center white--text elevation-0 rounded-0 border-0 "
              background-color="#eaeaea"
              color="#4abc96"
            ></v-select>
          </template>
          <template v-slot:append v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              color="#4abc96"
              class="rounded-0 btn--search white--text "
              height="55"
              :class="{ 'btn--desktop': $vuetify.breakpoint.smAndUp }"
              :disabled="!searchbook"
              
            >
              Buscar
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" class="pa-0 ma-0">
        <v-btn
          color="#4abc96"
          class="rounded-0 btn--search white--text "
          height="50"
          width="100%"
          :class="{ 'btn--desktop': $vuetify.breakpoint.smAndUp }"
          @click="deleteTypedItem()"
          v-if="$vuetify.breakpoint.xsOnly"
        >
          Buscar
        </v-btn>
      </v-col>

    
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
export default {
  data() {
    return {
      Crytonumero: "",
      searchbook: "",
      category: "category text",
      items: ["Nombre", "Autor"],
      e1: "Autor",
    };
  },
   
  methods: {

    deleteTypedItem() {},
    updateCategory(event) {},
    searchpalabra(palabra) {
       
    },
  },
};
</script>
  
<style lang="scss" scoped>
.btn--search {
  background: var(--corporative-1);
  font-size: 16px !important;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
  text-transform: none;
}
.btn--desktop {
  width: 150px;
}

.align-btn {
  margin-top: -4px !important;
}
</style>
