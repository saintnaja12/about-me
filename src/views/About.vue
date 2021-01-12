<template>
  <div class="about">
    <h1>About me</h1>
    <FormAbout/>
  </div>
</template>

<script>
import FormAbout from '../components/FormAbout.vue'

export default {
  name:'About',
  components:{
    FormAbout
  }
  
}
</script>

<style scoped>
  h1{
    margin: 20px 20px 20px 20px;
  }
</style>
