<template>
  <div>
      
    <v-menu
        bottom
        left
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            primary
            icon
            v-bind="attrs"
            v-on="on"
            >
            <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item @click="handleClick(index)"
            v-for="(item, index) in items"
            :key="index"
            >
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>

   <delete-dialouge v-if="dialogs.delete" :task="task" @close="dialogs.delete = false"/>
   <edit-dialouge v-if="dialogs.edit" :task="task" @close="dialogs.edit = false"/>
   <due-date-dialouge v-if="dialogs.dueDate" :task="task" @close="dialogs.dueDate = false"/>
  </div>

</template>

<script>
import DeleteDialouge from '../Todo/Dialouge/DeleteDialouge.vue';
import EditDialouge from '../Todo/Dialouge/EditDialouge.vue';
import DueDateDialouge from './Dialouge/DueDateDialouge.vue';

export default {
    
    data: () => ({
      items: [
        { 
            title: 'Edit', 
            icon: 'mdi-pencil',
            click(){
                this.dialogs.edit = true;
            }
        },
        { 
            title: 'Due Date', 
            icon: 'mdi-calendar',
            click(){
                this.dialogs.dueDate = true;
            }
        },
        { 
            title: 'Delete', 
            icon: 'mdi-delete',
            click(){
                this.dialogs.edit = true;
            } 
        },
      ],
      dialogs: {
          delete: false,
          edit: false,
          dueDate: false
      }
    }),
    props:["task"],
    components: {
        DeleteDialouge,
        EditDialouge,
        DueDateDialouge
    },
    methods: {
        handleClick(index){
            this.items[index].click.call(this);
        }
    }

}
</script>

<style>

</style>