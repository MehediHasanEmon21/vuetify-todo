<template>
     <div class="no-task"> 
      <v-icon
        size="100"
        color="primary darken-2"
      >
        mdi-check
      </v-icon>
      <div class="primary--text ml-3"> 
        No Task
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.no-task{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>