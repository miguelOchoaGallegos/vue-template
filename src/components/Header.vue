<template>
<!--
<b-container fluid>
<b-row>
<p class="lead">Bienvenido {{fullname}}</p> 
</b-row>
<b-row>
<b-button @click="logout">cerrar sesion</b-button>
</b-row>
</b-container>  |  variant="danger" type="dark"
-->

<div>
<b-navbar toggleable="md" class="head">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#" class="title-app">Portal Empleado</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!--
    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>
    -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form> -->

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <span class="title-app"> <icon name="user"></icon> Usuario</span>
        </template>
        <b-dropdown-item href="#" class="sub-title-app">Perfil de usuario</b-dropdown-item>
        <b-dropdown-item @click="logout" class="sub-title-app">Cerrar sesión</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
</template>

<script>    
export default {  
  data () {
    return {
        fullname: this.$store.state.user.fullname,
        username: this.$store.state.user.name
    }
  },
  methods: {
    logout () {
      this.$auth.logout();
    }
  }
}
</script>

<style>
.head {
  background-color :  #f2f2f2;  
   height :  50px;
}

.title-app {
  font-family : DINRegular,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;  
  color : #7d0063 !important;
}

.sub-title-app {
  font-family : DINRegular,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;  
  color : #8c8c8c !important;
  font-size:12px;
}

</style>
