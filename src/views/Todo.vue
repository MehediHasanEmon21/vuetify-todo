<template>
<div class="home">

    <field-add-task></field-add-task>

    <list-tasks v-if="$store.state.tasks.length"></list-tasks>
    <no-task v-else></no-task>
 
</div>
  
</template>

<script>

  import FieldAddTask from '../components/Todo/FieldAddTask.vue'
  import ListTasks from '../components/Todo/ListTasks.vue'
  import NoTask from '../components/Todo/NoTask.vue'
  export default {
    name: 'Todo',
    components: {
      FieldAddTask,ListTasks,NoTask
    },
    data(){
      return {
        
       
      }
    },
    methods: {
      
    }

    
  }
</script>


