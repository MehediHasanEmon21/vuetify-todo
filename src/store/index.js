import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      {
        id: 1,
        title: 'Wake up',
        done: false,
        dueDate: '2021-11-24'
      },
      {
        id: 2,
        title: 'Get bananas',
        done: false,
        dueDate: '2021-11-25'
      },
      {
        id: 3,
        title: 'Eat bananas',
        done: false,
        dueDate: null
      }
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },

  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks
      }
      return state.tasks.filter(task =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      )
    }
  },
 
  actions: {

    addTask(context, payload){
      context.commit('addTask',payload);
      context.commit('showSnackbar','Task Added!!');
    },
    deleteTask(context,id){
        context.commit('deleteTask',id);
        context.commit('showSnackbar','Task Deleted!!');
    },
    updateTask(context, payload){
        context.commit('updateTask',payload);
        context.commit('showSnackbar','Task Updated!!');

    },
    updateDateTask(context, payload){
      context.commit('updateDateTask',payload);
      context.commit('showSnackbar','Due Date Updated!!');

   }

  },

  mutations: {
    setSearch(state, value) {
      state.search = value
    },
    addTask(state,payload){
      let task = {
        id: Date.now(),
        title: payload,
        done: false,
        dueDate: null
      }
      state.tasks.push(task);
    },
    deleteTask(state,id){
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    doneTask(state,id){
      let task = state.tasks.filter((task) => {
        return task.id === id;
      })[0]
      task.done = !task.done
    },

    updateTask(state,payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.title = payload.title;
    },

    updateDateTask(state,payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },

    showSnackbar(state,text){
      let timeout = 0;
      if(state.snackbar.show){
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      },timeout)
      
    },

    hideSnackbar(state){
      state.snackbar.show = false;
    }
  },

  
})
