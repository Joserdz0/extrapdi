<template>
<!-- Este es nuestro programa principal -->
  <v-container>
    <v-row>
      <v-col class="py-16 mx-auto" cols="12">
        <div class="contenedor">
          <v-row v-if="visualizar">
            <v-col offset="2" cols="8" offset-md="4" md="4" style="background-color:white;">
              <!-- Aqui subimos la imagen -->
              <v-file-input
                id="seleccionArchivo"
                label="Subir imagen"
                filled
                prepend-icon="photo_camera"
                @change="accionCarga"
              ></v-file-input>
            </v-col>
          </v-row>
          <!-- cuando ya se sube una imagen mostramos la imagen que se subio -->
          <canvas
            width="800"
            height="600"
            id="canvas"
            :style="`margin-top:200px; display: ${visualizar ? 'none' : ''};`"
          ></canvas>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState,mapMutations,mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data: () => ({
  }),
  methods: {
    // aqui llamamos a Cargar para subir la imagen y poder trabajarla
    ...mapActions(['accionCarga'])
  },
  computed:{
    //Aqui llamamos a Visualizar para ver la imagen
    ...mapState(['visualizar'])
  }
};
</script>
<style>
body {
  background: #333;
}

#canvas {
  background-color: #000;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
</style>