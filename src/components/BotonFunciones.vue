<template>
  <v-speed-dial v-model="fab" bottom right fixed v-if="!visualizar">
    <template v-slot:activator>
      <v-btn v-model="fab" color="pink" dark fab>
        <v-icon v-if="fab"> close </v-icon>
        <v-icon v-else> edit </v-icon>
      </v-btn>
    </template>
    <!-- Hacemos el boton de blanco y negro -->
    <v-btn
      title="Blanco y negro"
      fab
      dark
      small
      color="grey"
      v-on:click="accionblancoNegro"
    >
      <v-icon>invert_colors</v-icon>
    </v-btn>
    <!-- Hacemos el boton de Sepia -->
    <v-btn title="Sepia" fab dark small color="brown" v-on:click="accionSepia">
      <v-icon>coffee</v-icon>
    </v-btn>
    <!-- Hacemos el boton de guardar -->
    <v-btn
      title="Descargar"
      fab
      dark
      small
      color="blue lighten-3"
      v-on:click="descargar"
    >
      <v-icon>download</v-icon>
    </v-btn>
  </v-speed-dial>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    fab: false,
  }),
  methods: {
    ...mapActions(["accionblancoNegro", "accionSepia"]),
    descargar() {
      let link = window.document.createElement("a"),
        //Convertimos el canvas a imagen de nuevo
        url = this.canvas.toDataURL(),
        //Damo el nombre a la nueva imagen
        filename = "imagenNueva.jpg";

      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
    },
  },
  computed: {
    ...mapState(["visualizar","canvas"]),
  },
};
</script>
<style scoped>
</style>