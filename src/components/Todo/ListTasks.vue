<template>
  <v-list v-if="$store.state.tasks.length"
      flat
    >

      <Task v-for="task in $store.getters.tasksFiltered" :key="task.id" :task="task"></Task>
        

      

    </v-list>
</template>

<script>
import Task from '../Todo/Task.vue'
export default {
   components:{
       Task
   }
}
</script>

<style>

</style>