<template>
 <b-container class="ev-login" fluid>
<b-row>
<b-col md="6" offset-md="3">
    <!--
    <vue-simple-spinner       
      :message="'iniciando session, espere por favor.'"
      :font-size="12"
      :text-fg-color="'#000'"
      :line-size="4"
      :size="30"
    ></vue-simple-spinner>    
    <rotate-square2 v-show="loggingIn"></rotate-square2>    
    <atom-spinner v-show="loggingIn"
          :animation-duration="1000"
          :size="60"
          :color="'#ff1d5e'"
     />  -->

     <loading
        :show="spinner.show"
        :label="spinner.msg"
        :overlay="spinner.overlay">
      </loading>
</b-col>
</b-row>

<b-row>
<b-col md="6" offset-md="4">
 <b-card 
 title="Bienvenido" 
 sub-title=""
 border-variant="dark"  
 img-src="./../assets/home-bg.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem;"          
          class="mb-4">
 <b-form>
<b-form-group id="grupouser"
                horizontal
                :label-cols="3"
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
                :label-cols="3"
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
<b-row>
<b-col md="4" offset-md="4" text-color="danger">
<b-alert variant="danger" :show="errorLogin.show">{{errorLogin.msg}}</b-alert>
</b-col>
</b-row>
</b-container>





</template>
<script>
import axios from 'axios';
//import {AtomSpinner} from 'epic-spinners'
//import {RotateSquare2} from 'vue-loading-spinner'
//import Spinner from 'vue-simple-spinner'
import loading from 'vue-full-loading'


export default {
  name: 'login',  
  components: { 
    loading 
  },
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      spinner : {
        show : false,
        msg : 'cargando...',
        overlay : true,
        timeOut : 4000
      },      
      errorLogin : {
        show:false,
        msg: ''      
      }
    }
  },
  mounted() {    
    this.credentials.username = '';  
    this.credentials.password = '';
  },
  methods: {
    submit () {      
      this.spinner.show = true;      
      this.errorLogin.show= false;
      const credentials = {
        usuario: this.credentials.username,
        clave: this.credentials.password
      }
    setTimeout(() => {
        this.spinner.show = false;
    }, this.spinner.timeOut);  
      // Auth.login() returns a promise. A redirect will happen on success.
      // For errors, use .then() to capture the response to output
      // error_description (if exists) as shown below:      
    this.$auth.login(credentials, 'Home').then((response) => {                     
       this.spinner.show = false; 
       this.errorLogin.show= true;
       this.errorLogin.msg = response.data.mensaje;
    });   

    }
  }
}
</script>
<style>

.ev-login {
  margin-top: 100px;  
}

</style>
