<template>
<div v-if="isLoggedIn">
<header-main />
<footer-main/>
</div>
<div v-else>
 <no-session/>
</div>
</template>
 
<script>
import Auth from '@/auth';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NoSession from '@/components/NoSession';

export default {  
  components : {    
    'footer-main': Footer,
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
    
</style>