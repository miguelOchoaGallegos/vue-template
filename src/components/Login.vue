<template>
<b-container class="ev-login" fluid>
<b-row>
<b-col md="6" offset-md="4">
  <spinner v-show="loggingIn" message="cargando..."></spinner>
</b-col>
</b-row>

<b-row>
<b-col md="6" offset-md="4">
 <b-card title="Bienvenido" sub-title="ingrese sus credenciales"
 img-src="https://lorempixel.com/600/300/food/5/" 
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"          
          class="mb-4">
 <b-form>
<b-form-group id="grupouser"
                horizontal
                :label-cols="4"
                breakpoint="md"                
                label="Usuario:"
                label-for="inputUser">
    <b-form-input id="inputUser" 
                  type="text"
                  v-model="credentials.username"
                  required></b-form-input>
  </b-form-group>

  <b-form-group id="grupopass"
                horizontal
                :label-cols="4"
                breakpoint="md"                
                label="Clave:"
                label-for="inputClave">
    <b-form-input id="inputClave" 
                  type="password"
                  v-model="credentials.password"
                  required></b-form-input>
  </b-form-group>

<b-form-group id="grupotitulo"
                horizontal
                :label-cols="4"
                breakpoint="md">    
                <b-button variant="outline-success"  @click="submit()">ingresar</b-button>
                <b-button variant="outline-danger">crear cuenta</b-button>
  </b-form-group>



</b-form>
 </b-card>



</b-col>
</b-row>
</b-container>





</template>
<script>
import axios from 'axios';
import Spinner from '@/components/common/Spinner'
export default {
  name: 'login',  
  components: { Spinner },
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      loggingIn: false,      
      error: ''
    }
  },
  mounted() {    
    this.credentials.username = '';  
    this.credentials.password = '';
  },
  methods: {
    submit () {
      this.loggingIn = true;
      const credentials = {
        usuario: this.credentials.username,
        clave: this.credentials.password
      }
      // Auth.login() returns a promise. A redirect will happen on success.
      // For errors, use .then() to capture the response to output
      // error_description (if exists) as shown below:      
    this.$auth.login(credentials, 'Home').then((response) => {              
       this.loggingIn = false
       this.error = response.data.mensaje;
    });

    }
  }
}
</script>
<style>

.ev-login {
  margin-top: 100px;
  background-color: #c5daf1;  
}

</style>
