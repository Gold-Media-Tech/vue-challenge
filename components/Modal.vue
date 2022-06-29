<template>
  <div class="text-center">
    <v-dialog
      v-model="modal"
      width="740px"
      persistent
      :fullscreen="$vuetify.breakpoint.xsOnly"
      content-class=""
      elevation-1
      style=""
    >
      <v-card class="elevation-14" style="border-radius:12px;">
        <div class="header-avatar">
          <v-img
            :src="require(`@/assets/Home/bg.jpg`)"
            height="150"
            width=""
            class="elevation-1"
            style="border-radius:12px;"
          >
            <!-- <v-spacer> </v-spacer> -->
            <button
              v-if="mostrarCerrar"
              @click="$emit('click', false)"
              class="boton-cerrar bg-red absolute text-right"
            >
              <img src="@/assets/Home/Vector.png" alt="botón-cerrar" />
            </button>
          </v-img>
          <v-row
            class="elevation-0 pa-0 ma-0 justify-center "
            style="width: 100%; background: #f2f2f2"
          >
            <v-col
              cols="12"
              md="4"
              lg="4"
              style="position: relative"
              class=" d-flex flex-column justify-center align-center"
            >
   
              <v-img
                :src="`https://covers.openlibrary.org/b/isbn/${perfilBook.isbn}-M.jpg`"
                height="155"
                width="155"
                style="z-index: 2"
                class="header-avatar___modal elevation-4 animated bounceIn dura-1"
              >
              </v-img>
              <v-row class="justify-center" style="width: 100% ;">
                <v-col
                  cols="1"
                  md="1"
                  sm="1"
                  lg="1"
                  style="position: relative"
                  class="pa-3 d-flex flex-column justify-end align-center"
                >
                  <div class="Avatar__favoritored pa-4">
                    <v-img
                      :src="require(`@/assets/Home/favorite.png`)"
                      width="30px"
                      height="30px"
                      class="Avatar__favorito--img pa-1 ma-1 animated fadeIn dura-2"
                      style="position: absolute"
                      contain
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>

        <v-card-text class="card__modal--subHeader pa-0 ma-0">
          <v-row class="pa-0 ma-0 mt-0" style="width: 100%">
            <v-col
              cols="12"
              md="12"
              lg="12"
              style=""
              class="ma-0 pa-0 d-flex text-center justify-center align-end"
            >
              <v-img
                :src="require(`@/assets/Home/bg.jpg`)"
                height="150"
                width=""
                style="z-index: 1"
                class="elevation-1"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text
          class="crad__modal--text white"
          v-scroll:#infinitescrollest="InfiniteScroller"
          style=""
        >
         
            <v-row class="pa-1 ma-1">
              <v-col
                cols="10"
                md="4"
                lg="4"
                class="pa-0 ma-0 mt-3 align-center d-flex"
              >
                <div class="texto__informacion--modal">Informacion</div>
              </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 d-flex justify-space-between">
              <v-col cols="3" lg="3" md="3" class="pa-0 ma-0 mt-5 align-center d-flex">
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius: 5px"
                    width="163"
                    outlined
                    :class="`animated fadeIn dura-1 `"
                  >
                    <div style="line-height: 20px" class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        ><v-icon small>mdi-alert-circle</v-icon> Gender
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0 ml-1"
                      >
                        {{ perfilBook.title }}
                      </v-list-item-title>
                    </div>
                  </v-card>
                </template>
              </v-col>

              <v-col cols="3" lg="3" md="3" class="pa-0 ma-0 mt-5 align-center d-flex">
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius: 5px"
                    width=""
                    outlined
                    :class="`animated fadeIn dura-2 `"
                  >
                    <div style="line-height: 20px" class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        ><v-icon small>mdi-alert-circle</v-icon> Origin
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0 ml-1"
                      >
                        {{ perfilBook.author_name }}
                      </v-list-item-title>
                    </div>
                  </v-card>
                </template>
              </v-col>

              <v-col cols="3" lg="3" md="3" class="pa-0 ma-0 mt-5 align-center d-flex">
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius: 5px"
                    width="163"
                    outlined
                    :class="`animated fadeIn dura-1 `"
                  >
                    <div style="line-height: 20px" class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        ><v-icon small>mdi-alert-circle</v-icon> Type
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0 ml-1"
                      >
                        
                        <span> No tiene </span>
                      </v-list-item-title>
                    </div>
                  </v-card>
                </template>
              </v-col>
            </v-row>
            <v-row class="pa-1 ma-1">
              <v-col
                cols="10"
                md="12"
                class="pa-0 ma-0 mt-3 align-center d-flex"
              >
                <v-divider class="mt-2"></v-divider>
              </v-col>
            </v-row>

            <v-row class="pa-1 ma-1">
              <v-col
                cols="10"
                md="4"
                class="pa-0 ma-0 mt-3 align-center d-flex"
              >
                <div class="texto__informacion--modal">
                  Episodios 
                </div>
              </v-col>
            </v-row>

            <v-row class="pa-0 ma-0 d-flex justify-space-between">
              <v-col
                cols="3"
             
                class="pa-0 ma-0 mt-5 align-center d-flex"
              >
                <template>
                  <v-card
                    class="mx-auto card__text--modal elevation-0 pa-1"
                    style="border-radius: 5px"
                    width="153"
                    outlined
                   
                  >
                    <div style="line-height: 20px" class="ma-1">
                      <v-list-item-subtitle
                        class="texto__card__sub-Description--modal"
                        >Pilot
                      </v-list-item-subtitle>
                      <v-list-item-title
                        class="texto__card--description-modal pa-0 ma-0 ml-1"
                      >
                        SO1E0I
                      </v-list-item-title>
                      <v-list-item-subtitle
                        class="texto__card__endDescription ml-1"
                      >
                        Diciembre 2, 2012
                      </v-list-item-subtitle>
                    </div>
                  </v-card>
                </template>
              </v-col>
            </v-row>

            <!-- inicio cards relleno -->
         
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  model: {
    prop: "modal",
    event: "click",
  },
  props: {
    perfilBook:  {
      type: Array,
      required: false,
      default: () => [
        {
          title: "Consumo de Api Axios - Vue Vuetify",
          author_name: ["Serrano kristian"],
          language: ["vue, vuetify..", "vue, vuetify.."],
          publish_date: ["septiembre de 2021.", "eptiembre de 2021.s."],
          isbn: ["9780552994101", "0342101870"],
        }
      ]
      },
    
    modal: Boolean,
    width: {
      type: String,
      default: "740px",
    },
    fullscreen: {
      type: Boolean,
      default: true,
    },
    mostrarCerrar: {
      type: Boolean,
      default: true,
    },
    backgroundB: {
      type: String,
      default: "#CAD500",
    },
    },
  
  data() {
    return {

    };
  },
  methods: {
    InfiniteScroller(e) {
      console.log(e);
    },
  },
  watch: {
    fullscreen: function (value) {
      if (value) {
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.texto__card__endDescription {
  /* "year" */

  font-family: Montserrate;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  /* identical to box height, or 118% */
  letter-spacing: 0.07px;

  color: #828282;

  /* Inside Auto Layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 0px;
}

.v-dialog {
  width: unset;
  height: unset;
}
.v-dialog--custom {
  height: 1000px;
}
.custom-dialog.v-dialog {
  margin: 10px !important;
}

.texto__card--description-modal {
  /* "name" */

  font-family: Montserrate;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  /* identical to box height, or 129% */
  letter-spacing: -0.41px;

  color: #081f32;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}
.texto__card__sub-Description--modal {
  /* "type" */

  font-family: Montserrate;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height, or 118% */
  letter-spacing: 0.07px;

  color: #828282;

  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 4px;
}
.texto__informacion--modal {
  /* Información */

  font-family: Montserrate;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #4f4f4f;
}
.texto__subheader-title {
  /* ALIVE */

  font-family: Montserrate;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */
  text-transform: uppercase;
  color: #4f4f4f;
}

.texto__header-title-end {
  /* info/primary */

  /* HUMAN */

  font-family: Montserrate;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  text-transform: uppercase;
  color: #4f4f4f;
}

.texto__header-subtitle {
  /* Beth Smith */

  font-family: MonserrateMedium;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;

  color: #081f32;
}
.header-avatar {
  position: relative;
}
.header-avatar___modal {
  border-radius: 50%;
  border: 3px solid #ffffff;
}
.card__modal--subHeader {
  width: 100%;
  height: 160px;
  background: #f2f2f2;
  padding: 10px;
}
.crad__modal--text {
  width: 100%;
}
.header-avatar___modal {
  position: absolute;
  top: -80px;
}
.boton-cerrar {
  position: absolute;
  right: 10px;
  top: 10px;
}
.Header__modal {
  background: #fff;
  height: 50px;
}

.avatar___modal {
  border-radius: 100%;
  position: absolute;
  top: 35px;
  left: 35%;
}
.Avatar__favoritored {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
}

.Avatar__favorito--img {
  position: absolute;
  z-index: 100;
  bottom: -75px;
  left: 0px;
}
</style>
