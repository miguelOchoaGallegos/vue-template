<template>

<div class="content-main-menu">
<div>
    <b-row class="text-left">        
        <b-col>        
        <b-card title="opciones" class="menu-lateral">
        <p class="card-text"><a href="#" @click="redirectHome()">inicio</a></p>
        <p class="card-text">datos personales</p>
        <p class="card-text">Seguros</p>
        <p class="card-text">Dependientes</p>
        <p class="card-text">Cuenta Bancaria</p>
        </b-card>
        </b-col>        
    </b-row>    
</div>
</div>
</template>
<script>

import {URL_API_CONSULTAS} from '../Constantes.js';
import axios from 'axios';
import router from '../router'

export default {     
  data(){
      return {
          variable : '',
          posts: '',
          errors: ''
      }
  },
  mounted() {
  },
  methods: {
      redirectHome(){          
          router.push({ name: "Home" });
      }
  }
 
}
</script>



<style>
.content-main-menu {        
    height :  600px;    
}
.menu-lateral {    
    font-family : DINRegular,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;  
    text-align : left !important;
    font-size : 12px;
}    
</style>