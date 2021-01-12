<template>
  <div class="Table">
    <!-- <EmpTable :employees="employees"/> -->
    <h1>TableAPI</h1>
    
    <router-link />
  </div>
</template>

<script>
// import EmpTable from "../components/EmpTable";

export default {
  name: 'Table',
  components: {
    // EmpTable  
  },
  data(){
    return{
        employees: [
          {
            id: 1,
            Employee_name: 'Dickeryao',
            Email: 'Dickeryao@gmail.com',
            Age: '22'
          },
          {
            id: 2,
            Employee_name: 'Lars',
            Email: 'Lars@gmail.com',
            Age: '49'
          },
          {
            id: 3,
            Employee_name: 'Genevatar',
            Email: 'Genevatar@gmail.com',
            Age: '34'
          }
        ]
      }
  }
}
</script>

<style scoped>

</style>
