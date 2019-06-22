<template>
  <div class="home">
    <myheader/>
    <Carousel/>
    <goods/>
    <myfooter/>
  </div>
</template>
<script>
import myheader from "@/components/Header.vue";//引入顶部导航--子组件
import myfooter from "@/components/Footer.vue";//引入顶部导航--子组件
import Carousel from "@/components/Carousel.vue";//引入轮播图--子组件
import goods from "@/components/Goods.vue";//引入商品模块--子组件
export default {
  name: "home",
  components: {
    myheader,Carousel,goods,myfooter
  }
};
</script>
<style scoped>
  .home{
      background-color: #ededed;
  }
</style>

