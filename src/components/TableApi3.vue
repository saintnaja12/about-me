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
            
                <b-modal id="orderFood" title="Add food">
                    <b-form >
                        <b-form-group
                            label="Food name"
                        >
                            <b-form-input
                            type="text"
                            required>

                            </b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Food price"
                        >
                            <b-form-input
                            type="text"
                            required>

                            </b-form-input>
                        </b-form-group>

                    </b-form>
                </b-modal>

                <b-container>
                    <b-card b-card no-body>
                        55
                    </b-card>
                </b-container>
            </b-card>
      </b-container>
  </div>
</template>

<script>
export default {
    name:'TableApi3',
    methods:{
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
    }
}
</script>

<style>

</style>