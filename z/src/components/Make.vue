// 品质保证组件
<template>
  <div class="make">
       <div v-for="(a,i) of makes" :key="i">
           <span>{{a.title}}</span>
       </div>
  </div>
</template>

<script>
export default {
  name: 'make',
  data() { 
    return {
       makes:[
           {title:"绿色食品",img_url:'@/..'},
           {title:"正品好货",img_url:'@/..'},
           {title:"假一赔十",img_url:'@/..'},
           {title:"多买优惠",img_url:'@/..'}
           ]
    }
  }
 }
</script>

<style scoped>
.make{
    display: flex;
    border: 1px solid red;
    width: 92%;
    margin: 0 auto;
    padding: 20px 0;
    height: 120px;
    justify-content: space-around;
}
</style>