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
                                <b-navbar-nav>
                                    <b-nav-item>
                                        <router-link to="/table/tableApi3">Home</router-link>
                                    </b-nav-item>
                                </b-navbar-nav>
                                <b-navbar-nav class="ml-auto">
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
                    @hidden="resetModal"
                    @ok="handleOk"
                >
                    <b-form @submit.stop.prevent="handleSubmit">
                        <b-form-group
                            label="Food name"
                            :state="name"
                        >
                            <b-form-input
                                type="text"
                                required
                                v-model="name"
                            >

                            </b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Food price"
                            :state="price"
                        >
                            <b-form-input
                                type="number"
                                required
                                v-model="price"
                            >

                            </b-form-input>
                        </b-form-group>

                    </b-form>
                </b-modal>

                <b-container>
                    <b-card b-card no-body>
                        <!-- <div class="mt-3">
                            Submitted Names:
                            <div v-if="submittedNames.length === 0">--</div>
                            <ul v-else class="mb-0 pl-3">
                                <li v-for="name in submittedNames" :key="name">{{ name }}</li>
                            </ul>
                        </div> -->
                        <ul>
                            <li v-for="(food,index) in this.$store.getters.foods" :key="index">{{food.name}}</li>
                        </ul>
                    </b-card>
                </b-container>
            </b-card>
      </b-container>
  </div>
</template>

<script>
import store from '@/store/index.js'

export default {
    name:'TableApi3',
    store,
    data(){
        return{
            // foodList:{
                name: '',
                price: 0,
            // },
            submittedNames: []
        }
    },
    methods:{
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        resetModal() {
            this.name = ''
            this.price = 0
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            
            const payload = {name: this.name, price: this.price}
            this.$store.dispatch("addFood", payload)

            // Push the name to submitted names
            // this.submittedNames.push(this.name) + this.submittedNames.push(this.price)
            // Hide the modal manually
            // this.$nextTick(() => {
            //     this.$bvModal.hide('modal-prevent-closing')
            // })
        }
    },
    computed:{
        foodGet(){
            return this.$store.getters.foods
        }
    }
}
</script>

<style>

</style>