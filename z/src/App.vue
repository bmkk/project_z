<template>
  <div id="app">
     <!-- <myheader/> -->
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
     <!-- <myfooter/> -->
  </div>
</template>
<script>

export default {
 
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ededed;
}
*{
  padding: 0;margin: 0;
}
</style>
