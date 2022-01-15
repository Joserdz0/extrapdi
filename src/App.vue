<template>
  <v-app>
    <v-app-bar app color="pink" dark>
      <router-link
        to="/"
        tag="span"
        style="cursor: pointer"
      >
        {{ appTitle }}
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    appTitle: "Extra Jose Antonio Rodriguez Rivera",
    //
  }),
};
</script>
<style>
  main{
    background-color: #333;
  }
</style>
