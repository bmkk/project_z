<template>
  <div class="shoplist">
    <myheader/>
     <div class="shop-cantainer">
        <div class="shop-order">
          <div v-for="(item,i) of order" :key="i">{{item}}</div>
        </div>
     </div>
    <myfooter/>
  </div>
</template>

<script>
import myheader from "@/components/Header.vue"; //引入顶部导航--子组件
import myfooter from "@/components/Footer.vue"; //引入底部导航--子组件

export default {
  name: "shoplist",
  components: {
    myheader,
    myfooter
  },
  data() {
    return {
      order: ["综合排序", "好评优先", "销量排序", "价格排序"]
    };
  }
};
</script>

<style scoped>
.shop-cantainer{
  padding:0 4% ;
}
.shop-order{
  display: flex;

}
.shop-order div{
  height: 50px;
  line-height: 50px;
}
</style>