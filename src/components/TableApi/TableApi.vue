<template>
  <div>
        <h1>Table API 1</h1>
        <b-table-simple>
            <b-thead>
                <b-td>ID</b-td>
                <b-td>NAME</b-td>
                <b-td>Username</b-td>
                <b-td>Email</b-td>
            </b-thead>
            <b-tbody>
                <b-tr v-for="list in lists" :key="list.id" >
                    <b-td>{{ list.id }}</b-td>
                    <b-td>{{ list.name }}</b-td>
                    <b-td>{{ list.username }}</b-td>
                    <b-td>{{ list.email }}</b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
  </div>
</template>

<script>
import user from '@/repository/user'

export default {
    name: 'TableApi',
    data(){
        return{
            lists: []
        }
    },
    mounted () {
        this.plusUser();
    },
    methods:{
        plusUser(){
            user.getUser().then(resp => {
                console.log(resp);
                this.lists = resp.data
            })
        }
    }
}
</script>

<style>


</style>