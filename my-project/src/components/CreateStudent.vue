<template>
  <div id="add-applicant">
    <h2>Add a new Applicant</h2>
    <form>
      <label>Name:</label>
      <input type="text" v-model="applicant.name" required/>
      <label>Address:</label>
      <input type="text" v-model="applicant.address" required/>
      <label>Email:</label>
      <input type="text" v-model="applicant.email" required/>
      <label>PhoneNumber:</label>
      <input type="text" v-model="applicant.phoneNumber" required/>
      <label>Bachelors Education School:</label>
      <input type="text" v-model="applicant.bsEducationSchool" required/>
      <label>Bachelors Education Title:</label>
      <input type="text" v-model="applicant.bsEducationTitle" required/>
      <button class="button" style="vertical-align:middle" v-on:click.prevent="post"><span>Add Applicant</span></button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding applicant</h3>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      applicant: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        bsEducationSchool: "",
        bsEducationTitle: ""
      },
      submitted:false,
    }
  },
  methods:{
    post:function(){
      this.$http.post('http://localhost:5000/api/student',{
        name: this.applicant.name,
        address: this.applicant.address,
        email: this.applicant.email,
        phoneNumber: this.applicant.phoneNumber,
        bsEducationSchool: this.applicant.bsEducationSchool,
        bsEducationTitle: this.applicant.bsEducationTitle
      }).then(function(data){
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
#add-applicant *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px
}
input[type="text"]{
  display: block;
  width: 100%;
  padding: 8px;
}
button{
  display: inline-block;
  border-radius: 4px;
  background-color: #196486;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 20px 0 10px
}
button span {
 cursor: pointer;
 display: inline-block;
 position: relative;
 transition: 0.5s;
}
button span:after {
 content: '\00bb';
 position: absolute;
 opacity: 0;
 top: 0;
 right: -20px;
 transition: 0.5s;
}

button:hover span {
 padding-right: 25px;
}

button:hover span:after {
 opacity: 1;
 right: 0;
}
</style>
