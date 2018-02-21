import ShowAllStudents from './components/ShowAllStudents.vue'
import CreateStudent from './components/CreateStudent.vue'
import ResumeUpload from './components/ResumeUpload.vue'

export default[
  {path: '/', component: ShowAllStudents},
  {path: '/form', component: CreateStudent},
  {path: '/upload', component: ResumeUpload}
]
