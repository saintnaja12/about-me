<template>
    <div>
        <h1>Table API 2</h1>
        <b-button type="button" variant="success" @click="plusPost">GET API</b-button>
        <!-- {{lists}} -->
        <!-- <b-table striped hover :lists="lists" :fields="fields"></b-table> -->
        <hr>
        
        <b-pagination
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
        ></b-table>
    </div>
</template>

<script>
import post from '../repository/post'

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
            // post.getPost()
            // .then(resp => resp.json())
            // .then(json => 
            //     this.lists = json.data
            //     .map(post => {
            //         return {
            //             id: post.id,
            //             title: post.title,
            //             body: post.body
            //         }
            //     })
            // )
            post.getPost().then(resp => {
                console.log(resp);
                this.lists = resp.data
            })
        },
        // paginate(page_size, page_number) {
        //     let listsToParse = this.lists;
        //     this.paginatedlists = listsToParse.slice(
        //         page_number * page_size,
        //         (page_number + 1) * page_size
        //     );
        // },
        // onPageChanged(page) {
        //     this.paginate(this.perPage, page - 1);
        // }
    },
    mounted(){
        this.plusPost();
        // this.paginate(this.perPage, 0);
    },
    computed: {
      rows() {
        return this.lists.length
      }
    }
}
</script>

<style scoped>

</style>