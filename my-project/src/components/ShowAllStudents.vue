<template>
  <div id="show-students">
      <h1> All students currently in the system </h1>
      <div v-for="student in students" class="single-student">
        <h2>{{student.name}}</h2>
        <article>Address: {{student.address}}</article>
        <article>Email: {{student.email}}</article>
        <article>Phone Number: {{student.phoneNumber}}</article>
        <article>Bachelor's School Name: {{student.bsEducationSchool}}</article>
        <article>Bachelor's Degree Title: {{student.bsEducationTitle}}</article>
        <article>Masters School Name: {{student.msEducationSchool}}</article>
        <article>Masters Degree Title: {{student.msEducationTitle}}</article>
        <article>PHd School Name: {{student.pHdEducationSchool}}</article>
        <article>PHd Degree Title: {{student.pHdEducationTitle}}</article>
        <article>Work Experience Company Name One: {{student.workExperienceCompanyNameOne}}</article>
        <article>Work Experience Title One: {{student.workExperienceTitleOne}}</article>
        <article>Work Experience Company Name Two: {{student.workExperienceCompanyNameTwo}}</article>
        <article>Work Experience Title Two: {{student.workExperienceTitleTwo}}</article>
        <article>Work Experience Company Name Three:{{student.workExperienceCompanyNameThree}}</article>
        <article>Work Experience Title Three: {{student.workExperienceTitleThree}}</article>
        <article>Extra Curricular Activity One: {{student.extraCurricularActivitiesOne}}</article>
        <article>Extra Curricular Activity Two: {{student.extraCurricularActivitiesTwo}}</article>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      students: []
    }
  },
  methods: {

  },
  created () {
    this.$http.get('http://localhost:5000/api/student').then(function (data) {
      console.log(data)
      this.students = data.body.slice(0, 30)
    }, {headers: {'Accept': 'application/json'}})
  }
}
</script>

<style>
#show-students{
  max-width: 800px;
  margin: 0 auto;
}
.single-student{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
