import ShowAllStudents from './components/ShowAllStudents.vue'
import CreateStudent from './components/CreateStudent.vue'

export default[
  {path: '/', component: ShowAllStudents},
  {path: '/form', component: CreateStudent}
]
