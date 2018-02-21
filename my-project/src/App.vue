<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import ShowAllStudents from './components/ShowAllStudents.vue'
import CreateStudent from './components/CreateStudent.vue'
import header from './components/header.vue'
import ResumeUpload from './components/ResumeUpload.vue'
export default {
  components: {
    'show-AllStudents': ShowAllStudents,
    'create-Student': CreateStudent,
    'app-header': header,
    'resume-upload': ResumeUpload
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
