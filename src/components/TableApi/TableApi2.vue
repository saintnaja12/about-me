<template>
    <div>
        <h1>Table API 2 (TestApi)</h1>
        <!-- <b-button type="button" variant="success" @click="plusPost">GET API</b-button> -->
        <!-- {{lists}} -->
        <!-- <b-table striped hover :lists="lists" :fields="fields"></b-table> -->
        <hr>
        
        <b-button type="button" @click="getUser()">Get user from API</b-button>
        {{user}}
        <!-- <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            align="center"
        ></b-pagination>
        <b-table
            id="my-table"
            :items="lists"
            :per-page="perPage"
            :current-page="currentPage"
            small
        ></b-table> -->


    </div>
</template>

<script>
import post from '@/repository/post'

import {mapState, mapActions} from 'vuex'

export default {
    name: 'TableApi2',
    data() {
        return {
            lists: [],
            fields: ['id', 'title', 'body'],
            perPage: 10,
            currentPage: 1,
        }
    },
    methods: {
        plusPost(){
            post.getPost().then(resp => {
                console.log(resp);
                this.lists = resp.data
            })
        },
        ...mapActions({
            getUser: 'getUser'
        })
    },
    // mounted(){
    //     this.plusPost();
    // },
    computed: {
        rows() {
            return this.lists.length
        },
        ...mapState({
            user: state => state.user
        })  
    }
}
</script>

<style scoped>

</style>