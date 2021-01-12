<template>
    <div id="formContact" class="container">
        <b-row>
            <b-col cols="3"></b-col>
            <b-col>
                <b-card bg-variant="light">
                    <b-form @submit.prevent="onSubmit()" @reset="onReset">
                        <b-form-group label="Contact Form " label-size="lg" label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-group label="Name:" label-cols-sm="3"
                                label-align-sm="right">
                                <b-form-input type="text" v-model="form.name" id="name"></b-form-input>
                            </b-form-group>

                            <b-form-group label="City:" label-cols-sm="3"
                                label-align-sm="right">
                                <b-form-input type="text" v-model="form.city" id="city"></b-form-input>
                            </b-form-group>

                            <b-form-group label="Country:" label-cols-sm="3"
                                label-align-sm="right">
                                <b-form-input type="text" v-model="form.country" id="country"></b-form-input>
                            </b-form-group>

                            <b-form-group label="Tel:" label-cols-sm="3" label-align-sm="right">
                                <b-form-input type="text" v-model="form.tel" id="tel"></b-form-input>
                            </b-form-group>

                            <b-button type="submit" variant="primary" >Submit</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>

                        </b-form-group>
                    </b-form>
                </b-card>
            </b-col>
            <b-col cols="3">
               <!-- <b-card class="mt-3" header="Form Data Result">
                    <b-button type="button" variant="primary" @click="plusUser">API</b-button>
                    {{list}}
               </b-card> -->
            </b-col>
        </b-row>
    </div>
</template>

<script>
import user from '../repository/user'

    export default {
        name: 'FormContact',
        data() {
            return {
                form: {
                    name: "",
                    city: "",
                    country: "",
                    tel: "",
                },
                list: []
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch("getContact", this.form)
            },
            onReset() {
                // e.preventDefault()
                this.form.name = ''
                this.form.city = ''
                this.form.country = ''
                this.form.tel = ''
            },
            plusUser(){
                user.getUser().then(resp => {
                    this.list = resp
                })
            }
        }
    }
</script>

<style>
    button {
        margin: 10px;
    }
</style>
