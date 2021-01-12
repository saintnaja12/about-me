<template>
  <div class="EmpTable container" >
    <b-form-group label="Table Options" label-cols-lg="2" v-slot="{ ariaDescribedby }">
      <b-form-checkbox v-model="striped" :aria-describedby="ariaDescribedby" inline>Striped</b-form-checkbox>
      <b-form-checkbox v-model="bordered" :aria-describedby="ariaDescribedby" inline>Bordered</b-form-checkbox>
      <b-form-checkbox v-model="borderless" :aria-describedby="ariaDescribedby" inline>Borderless</b-form-checkbox>
      <b-form-checkbox v-model="outlined" :aria-describedby="ariaDescribedby" inline>Outlined</b-form-checkbox>
      <b-form-checkbox v-model="small" :aria-describedby="ariaDescribedby" inline>Small</b-form-checkbox>
      <b-form-checkbox v-model="hover" :aria-describedby="ariaDescribedby" inline>Hover</b-form-checkbox>
      <b-form-checkbox v-model="dark" :aria-describedby="ariaDescribedby" inline>Dark</b-form-checkbox>
      <b-form-checkbox v-model="fixed" :aria-describedby="ariaDescribedby" inline>Fixed</b-form-checkbox>
      <b-form-checkbox v-model="footClone" :aria-describedby="ariaDescribedby" inline>Foot Clone</b-form-checkbox>
      <b-form-checkbox v-model="noCollapse" :aria-describedby="ariaDescribedby" inline>No border collapse</b-form-checkbox>
    </b-form-group>

    <b-form-group label="Head Variant" label-cols-lg="2" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="headVariant"
        :aria-describedby="ariaDescribedby"
        class="mt-lg-2"
      >
        <b-form-radio :value="null" inline>None</b-form-radio>
        <b-form-radio value="light" inline>Light</b-form-radio>
        <b-form-radio value="dark" inline>Dark</b-form-radio>
      </b-form-radio-group>
    </b-form-group>

    <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2">
      <b-form-select
        id="table-style-variant"
        v-model="tableVariant"
        :options="tableVariants"
      >
        <template #first>
          <option value="">-- None --</option>
        </template>
      </b-form-select>
    </b-form-group>

    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></b-table>

    <table>
      <thead>
        <tr>
          <th>Emp_name</th>
          <th>Emp_email</th>
          <th>Emp_age</th>
        </tr>
      </thead>
      <tbody v-for="employee in employees" :key="employee.id">
        <tr>
          <td>{{employee.Employee_name}}</td>
          <td>{{employee.Email}}</td>
          <td>{{employee.Age}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import user from '../repository/user'

export default {
  name: "EmpTable",
  data(){
    return {
      fields: ['Employee_name', 'Email', 'Age'],
      items: [
        { Age: 22, Employee_name: 'Dickerson', Email: 'Dickerson@gmail.com' },
        { Age: 49, Employee_name: 'Larsen', Email: 'Larsen@gmail.com' },
        { Age: 34, Employee_name: 'Geneva', Email: 'Geneva@gmail.com' }
      ],
      tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
        ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false,
      //API
      list: []
    }
  },
  props:{
    employees: Array
  },
  methods: {
    rowClass(item, type){
      if (!item || type !== 'row') return
      if (item.status === 'awesome') return 'table-success'
    },
    plusUser(){
        user.getUser().then(resp => {
            this.list = resp
        })
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: 50px
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
