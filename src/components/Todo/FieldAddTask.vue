<template>
  <v-text-field
        label="Add Task"
        outlined
        hide-details
        @keyup.enter="addTask"
        class="pa-3 test-class"
        clearable
        v-model="newTask"
    >

    <template v-slot:append>
      <v-icon @click="addTask" :disabled="inputInvalid" primary>mdi-plus</v-icon>
    </template>
    
    </v-text-field>
</template>

<script>
export default {
   data(){
      return {
        newTask: '',
       
      }
    },
    methods: {
     addTask(){
       if(!this.inputInvalid){
         this.$store.dispatch('addTask',this.newTask);
         this.newTask = '';
       }else{
         alert('Input Invalid');
       }
        
      }
    },

   computed: {
    inputInvalid(){
      return !this.newTask;
    }
  }

}
</script>

<style>

</style>