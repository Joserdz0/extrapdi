import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visualizar: true,
    canvas: "",
    context: "",
    imageData: ""
  },
  mutations: {
    carga(state) {
      let subirArchivo = document.getElementById("seleccionArchivo");

      // Los archivos seleccionados, pueden ser muchos o uno
      let archivos = subirArchivo.files;
      // Si no hay archivos salimos de la función y quitamos la imagen
      if (!archivos || !archivos.length) {
        return;
      }
      // Ahora tomamos el primer archivo, el cual vamos a previsualizar
      let primerArchivo = archivos[0];
      //activamos el canvas
      state.visualizar = false;
      // Lo convertimos a un objeto de tipo objectURL
      let objectURL = URL.createObjectURL(primerArchivo);
      //obtenemos los datos del canvas
      state.canvas = document.getElementById("canvas");
      //obtenemos los datos getcontext de canvas
      state.context = canvas.getContext("2d");
      //Cargamos la imagen al canvas
      let imageObj = new Image();
      imageObj.src = objectURL;
      let contexto = state.context;
      imageObj.onload = function () {
        contexto.drawImage(imageObj, 0, 0, 800, 600);
      };
    },
    blancoNegro(state) {
      //Guardamos los datos de la imagen para usarlos despues
      state.imageData = state.context.getImageData(0, 0, state.canvas.width, state.canvas.height);

      let pixels = state.imageData.data;


      let numPixels = state.imageData.width * state.imageData.height;


      for (var i = 0; i < numPixels; i++) {
        var r = pixels[i * 4];
        var g = pixels[i * 4 + 1];
        var b = pixels[i * 4 + 2];

        var grey = (r + g + b) / 3;

        pixels[i * 4] = grey;
        pixels[i * 4 + 1] = grey;
        pixels[i * 4 + 2] = grey;
      }
      state.context.putImageData(state.imageData, 0, 0);
    }
,
    sepia(state) {
      //Guardamos los datos de la imagen para usarlos despues
      state.imageData = state.context.getImageData(0, 0, state.canvas.width, state.canvas.height);

      let pixels = state.imageData.data;


      let numPixels = state.imageData.width * state.imageData.height;


      for ( var i = 0; i < numPixels; i++ ) {
        var r = pixels[ i * 4 ];
        var g = pixels[ i * 4 + 1 ];
        var b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;

        pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
        pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
        pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
    }
      state.context.putImageData(state.imageData, 0, 0);
    }




  },
  actions: {
    accionCarga({ commit }) {
      commit('carga')
    },
    accionblancoNegro({ commit }) {
      commit('blancoNegro')
    },    
    accionSepia({ commit }) {
      commit('sepia')
    }
  },
  modules: {
  }
})
