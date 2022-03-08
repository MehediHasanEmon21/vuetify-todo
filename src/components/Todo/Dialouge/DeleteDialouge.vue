<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Delete Task?
        </v-card-title>
        <v-card-text>Are you sure to wanna delete this item.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('close')"
          >
            No
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteTask(task.id)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data(){
    return {

    }
  },
  methods: {
    deleteTask(id){
      this.$store.dispatch('deleteTask',id);
    }
  }
}
</script>

<style>

</style>