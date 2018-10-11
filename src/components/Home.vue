<template>
<div v-if="isLoggedIn">

<div class="contenedor-main">
<header-main />
<inicio-main />
<footer-main/>
</div>

</div>

</div>
<div v-else>
 <no-session/>
</div>
</template>
 
<script>
import Auth from '@/auth';
import Footer from '@/components/Footer';
import Inicio from '@/components/Inicio';
import Header from '@/components/Header';
import NoSession from '@/components/NoSession';


export default {  
  components : {    
    'footer-main': Footer,    
    'inicio-main' : Inicio,
    'no-session': NoSession,
    'header-main': Header
  },
  data () {
    return {      
      isLoggedIn : this.$store.state.auth.isLoggedIn      
    }
  },
  mounted() {      
  }
 
}
</script>
<style>   
.contenedor-main {

}
</style>