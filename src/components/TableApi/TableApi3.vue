<template>
  <div>
      <h1>Table API 3</h1>
      <b-container>
            <b-card b-card no-body>
                <b-card-body class="text-center">
                    <b-navbar type="dark" variant="dark">
                        <b-navbar-nav>

                            <b-navbar-toggle target="navbar-toggle-collapse">
                                <template #default="{ expanded }">
                                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                                </template>
                            </b-navbar-toggle>

                            <b-collapse id="navbar-toggle-collapse" is-nav>
                                
                                <b-navbar-nav class="mr-auto">
                                    <b-nav-item>
                                        <b-button v-b-modal.orderFood>Add food</b-button>
                                    </b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                        </b-navbar-nav>
                    </b-navbar>
                </b-card-body>
            
                <b-modal 
                    id="orderFood" 
                    title="Add food"
                    ref="modal"
                    @show="resetModal"
                    @click="resetModal"
                    @ok="handleOk"
                >
                    <b-form @submit.stop.prevent="handleSubmit">
                        <b-form-group
                            label="Food name"
                        >
                            <b-form-input
                                type="text"
                                required
                                v-model="name"
                                id="name"
                            >
                            </b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Food price" 
                        >
                            <b-form-input
                                type="number"
                                required
                                v-model="price"
                                id="price"
                            >
                            </b-form-input>
                        </b-form-group>

                    </b-form>
                </b-modal>

                <b-container>
                    <b-card b-card no-body>

                        <b-table-simple responsive bordered striped hover >
                            <b-thead>
                                <b-tr>
                                    <b-th>ID</b-th>
                                    <b-th>Name</b-th>
                                    <b-th>Price</b-th>
                                    <b-th>Del | Edit</b-th>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr v-for="(food,index) in postFoods" :key="index">
                                    <b-td v-if="index !== editIndex">{{index + 1}}</b-td>
                                    <b-td v-if="index !== editIndex">{{food.name}}</b-td>
                                    <b-td v-if="index !== editIndex">{{food.price}}</b-td>
                                    <b-td>
                                        <b-button type="button" variant="danger" @click="delFood(index)" class="mr-1"><b-icon icon="trash-fill" aria-hidden="true"></b-icon></b-button>
                                        <b-button type="button" variant="warning" @click="openEdit(index,food)" class="ml-1"><b-icon icon="scissors" aria-hidden="true"></b-icon></b-button>
                                    </b-td>
                                    <b-td v-if="index === editIndex">
                                        <b-form-input
                                            type="text"
                                            v-model="name"
                                            id="name"
                                            v-on:change="name = $event.target.name"
                                        >
                                        </b-form-input>
                                    </b-td>
                                    <b-td v-if="index === editIndex">
                                        <b-form-input
                                            type="number"
                                            v-model="price"
                                            id="price"
                                            v-on:change="price = $event.target.price"
                                        > 
                                        </b-form-input>  
                                    </b-td>
                                    <b-td v-if="index === editIndex">
                                        <b-button type="button" variant="success"  @click="editFood()"><b-icon  icon="check-circle" aria-hidden="true"></b-icon></b-button>
                                        <b-button type="button" variant="danger" @click="closeEdit(index)"><b-icon  icon="dash-circle" aria-hidden="true"></b-icon></b-button>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                        
                        
                    </b-card>
                </b-container>
            </b-card>
      </b-container>
  </div>
</template>

<script>
export default {
    name:'TableApi3',
    data(){
        return{
            foodList:[],
            submittedNames: [],
            name: "",
            price: 0,
            editIndex: -1,
        }
    },
    methods:{
        // alert
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        resetModal() {
            this.name = ''
            this.price = 0
        },

        //add food
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            
            // Push the name to submitted names
            // if(this.name != '' && this.price != 0){
                let payload = {
                    name: this.name, 
                    price: this.price
                }
            // }

            this.$store.dispatch("addFood", payload)

            // Hide the modal manually
            // this.$nextTick(() => {
            //     this.$bvModal.hide('modal-prevent-closing')
            // })
        },

        //delete food
        delFood(index){
            this.$store.dispatch("delFood", index)
        },

        // edit food
        openEdit(index, foods){
            this.editIndex = index
            this.name = foods.name
            this.price = foods.price
        },
        closeEdit(){
            this.editIndex = -1
            this.name = "",
            this.price = 0
        },
        editFood(){
            let payload = {
                index: this.editIndex,
                name: this.name,
                price: this.price
            }
            this.$store.dispatch("editFood", payload).then(this.closeEdit())
        }
    },
    computed:{
        postFoods(){
            return this.$store.getters.postFoods
        }
    }
}
</script>

<style>

</style>