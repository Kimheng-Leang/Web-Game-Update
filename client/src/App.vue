<template>
<div>
  <div class="">
    <div class="">
      <router-view/>
    </div>
  </div>

</div>

</template>

<script>
export default {
  name:"app",
  methods:{
    logout(){
      this.$store.commit('setToken');
      this.$router.push('/login')
    },
    clickLogin(result){
      console.log(result);
    }
  }
}
</script>

<style >
:root{
    --primary-color: #D72323;
    --light-color: #EEEEEE;
    --black-color: #303841;
    --dark-color: #3A4750;
    --max-width: 1100px;
  }
</style>