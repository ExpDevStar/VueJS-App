<template>
  <div class="container">
    <div class="file-upload">
      <label>Resume
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    data() {
      return {
        file: ''
      }
    },

    methods: {
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },
      submitFile() {
        let formData = new FormData();

        formData.append('file', this.file);

        axios.post('http://localhost:5000/api/student/UploadApplicant', formData,
        {
          headers: {
            'Accept' : 'application/json'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    }
  }
}
</script>

<style scoped>

</style>
