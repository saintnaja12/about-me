<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <div class="container">
          <b-navbar-brand href="#">
            <router-link to="/">Home</router-link> |
          </b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <router-link to="/about">About Me</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/contact">Contact</router-link>
              </b-nav-item>
              <b-nav-item-dropdown text="Table" right>
                <b-dropdown-item href="#"><router-link to="/table/tableApi" id="dropdown">Table Api 1</router-link></b-dropdown-item>
                <b-dropdown-item href="#"><router-link to="/table/tableApi2" id="dropdown">Table Api 2</router-link></b-dropdown-item>
                <b-dropdown-item href="#"><router-link to="/table/tableApi3" id="dropdown">Table Api 3</router-link></b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-button v-b-modal.modal-1 variant="warning">Check contact</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
    <router-view />

    <b-modal id="modal-1" title="Contact data">
      <li v-for="form in contactFromStore" :key="form">
        {{form}}
      </li>
    </b-modal>
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      form: {}
    }
  },
  computed:{
    contactFromStore(){
      return this.$store.getters.getContactState
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #2c3e50;
  }

  
</style>
