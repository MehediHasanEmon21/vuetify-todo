<template>
  <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="hideSnackbar"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
</v-snackbar>
</template>

<script>
export default {

   methods: {
       hideSnackbar(){
           this.$store.commit('hideSnackbar');
       }
   }

}
</script>

<style>

</style>