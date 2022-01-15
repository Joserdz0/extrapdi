<template>
<div>
  <hello-world/>
  <boton-funciones/>
</div>

</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import BotonFunciones from '../components/BotonFunciones'
  export default {
    name: 'Home',

    components: {
      HelloWorld,
      BotonFunciones
    },
  }
</script>
