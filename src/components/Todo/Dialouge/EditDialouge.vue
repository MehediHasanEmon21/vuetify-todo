<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Update Task?
        </v-card-title>
        <v-card-text>Edit the title of this task:
          <v-text-field v-model="taskTitle" @keyup.enter="updateTask"/>
        </v-card-text>
        
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
            @click="updateTask"
            :disabled="inputInvalid"
          >
            Save
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
      taskTitle: null
    }
  },
  mounted(){
    this.taskTitle = this.task.title;
  },
  methods: {
    updateTask(){

      if(!this.inputInvalid){
        
        let payload = {
          id: this.task.id,
          title: this.taskTitle
        }
        this.$store.dispatch('updateTask',payload);
        this.$emit('close');

      }else{
        alert('Invalid Input!!!!');
      }

      
    }


  },
  computed: {
    inputInvalid(){
      return !this.taskTitle ||  (this.taskTitle === this.task.title);
    }
  }
}
</script>

<style>

</style>