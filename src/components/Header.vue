<template>
<!--
<b-container fluid>
<b-row>
<p class="lead">Bienvenido {{fullname}}</p> 
</b-row>
<b-row>
<b-button @click="logout">cerrar sesion</b-button>
</b-row>
</b-container>
-->

<div>
<b-navbar toggleable="md" type="dark" variant="primary">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">app</b-navbar-brand>

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
          <em> <icon name="user"></icon> Usuario</em>
        </template>
        <b-dropdown-item href="#">Perfil de usuario</b-dropdown-item>
        <b-dropdown-item @click="logout">Cerrar sesión</b-dropdown-item>
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
</style>
