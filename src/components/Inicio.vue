<template>

<div class="content-main">

<div>
    <b-row class="text-left">        
        <b-col cols="2">        
        <menu-main />
        </b-col>
        <b-col cols="10">
            <div class="text-center">
            <img src="../assets/home-bg.jpg" style="max-width: 40rem;" />
            </div>
        </b-col>
    </b-row>
    
</div>

</div>


</template>


<script>

import {URL_API_CONSULTAS} from '../Constantes.js';
import axios from 'axios';
import Menu from '@/components/Menu';

export default {     
  components : {        
    'menu-main': Menu
  },
  data(){
      return {
          variable : '',
          posts: '',
          errors: ''
      }
  },
  mounted() {            
    /*this.variable = URL_API_CONSULTAS + ;
    b-container
    debugger;
       axios.get(this.variable)
        .then(response => {
        // JSON responses are automatically parsed.        
            //this.posts = response.data
        })
        .catch(e => {
            //this.errors.push(e)
        });
        */
  }
 
}
</script>

<style>
.content-main {        
    height :  900px;    
}
.menu-lateral {    
    font-family : DINRegular,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;  
    text-align : left !important;
    font-size : 12px;
}    
</style>