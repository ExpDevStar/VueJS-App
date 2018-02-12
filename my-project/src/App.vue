<template>
  <div>
    <show-AllStudents></show-AllStudents>
  </div>
</template>

<script>
import ShowAllStudents from './components/ShowAllStudents.vue'
export default {
  components: {
    'show-AllStudents': ShowAllStudents
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
