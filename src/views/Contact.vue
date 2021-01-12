<template>
  <div class="contact">
    <h1>Contact</h1>
    <FormContact/>
  </div>
</template>

<script>
import FormContact from '../components/FormContact'

export default {
    name: 'Contact',
    components:{
        FormContact
    },
}
</script>

<style scoped>
    h1{
        margin: 20px 20px 20px 20px;
    }
</style>

