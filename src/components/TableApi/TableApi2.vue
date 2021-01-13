<template>
    <div>
        <b-container>
            <h1>Table API 2 (TestApi)</h1>
            <!-- <b-button type="button" variant="success" @click="plusPost">GET API</b-button> -->
            <!-- {{lists}} -->
            <!-- <b-table striped hover :lists="lists" :fields="fields"></b-table> -->
            <hr>

            <hr>
            <!-- {{gettersUser}} -->

            <b-row>
                <b-col lg="4">
                    <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="3" label-cols-md="3"
                        label-cols-lg="3" label-align-sm="right" label-size="sm" class="mb-1">
                        <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" size="sm">
                        </b-form-select>

                    </b-form-group>
                </b-col>
                <b-col lg="4">
                    <b-form-group>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" align="center"></b-pagination>
                    </b-form-group>
                </b-col>
                <b-col lg="4">
                    <b-form-group>
                        <b-button v-b-modal.formApi variant="primary">Post API</b-button>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-table id="my-table" :items="lists" :per-page="perPage" :current-page="currentPage" small
                        hover>
                    </b-table>
                </b-col>
            </b-row>

            <b-modal id="formApi" title="Post API">
                <b-form>

                    <b-form-group label="Title">
                        <b-form-input type="text" v-model="name">

                        </b-form-input>
                    </b-form-group>

                    <b-form-group label="Body">
                        <b-form-input type="text" v-model="price">

                        </b-form-input>
                    </b-form-group>

                </b-form>
            </b-modal>

        </b-container>
    </div>
</template>

<script>
    // เรียก API ตรงๆไม่ผ่าน Store
    import post from '@/repository/post'

    // import {
    //     mapActions
    // } from 'vuex'

    export default {
        name: 'TableApi2',
        data() {
            return {
                lists: [],
                fields: ['Id', 'Name', 'Username'],
                perPage: 10,
                pageOptions: [5, 10, 15, {
                    value: 100,
                    text: "Show a lot"
                }],
                currentPage: 1,

                title: '',
                body: ''
            }
        },
        methods: {
            plusPost() {
                post.getPost().then(resp => {
                    console.log(resp.data);
                    this.lists = resp.data
                })
            },
            // ...mapActions({
            //     getUser: 'getUser'
            // })
        },
        mounted() {
            this.plusPost();
            // this.getUser()
        },
        computed: {
            rows() {
                return this.lists.length
            },
            // gettersUser() {
            //     // console.log(this.$store.getters.gettersUser)
            //     return this.$store.getters.gettersUser
            // }
        }
    }
</script>

<style scoped>

</style>