<template>
  <div class="goods">
    <div class="goods-box">
      <div class="goods-nav">
        <div class="goods-title">
          <div class="active">热卖商品</div>
          <div v-for="(item,i) in types" :key="i">{{item}}</div>
          <div>更多</div>
        </div>
        <div class="goods-search">
          <input type="text" placeholder="输入你想要查找的食品">
          <router-link to="/shoplist">搜索</router-link>
        </div>
      </div>
      <div class="goods-type">
       <div class="goods-item">
          <div v-for="(item,i) in goods" :key="i">
              <img src="@/assets/goods/6.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      types:['鸡肉','鸭肉','牛肉','鱼干'],
      goods: [
        {img_url:'@/assets/goods/1.jpg'},
        {img_url:'@/assets/goods/2.jpg'},
        {img_url:'@/assets/goods/3.jpg'},
        {img_url:'@/assets/goods/4.jpg'}]
    };
  }
};
</script>

<style scoped>
.goods {
  box-sizing: border-box;
  overflow: hidden;
  width: 92%;
  margin: 0 auto;
}
.goods-nav {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
}
.goods-title{
  display: flex;
  align-items: center;
  padding-left:10px;
}
.goods-title div{
  margin-right: 50px;
  width: 80px;
  text-align: center;
  font-size: 20px;
  padding: 5px 0;
}
.active{
  font-weight: bold;
}
.goods-search input{
   outline: none;
   border: none;
   /* border-radius: 20px; */
   width: 220px;
   height: 30px;
   line-height: 30px;
   padding-left:15px; 
   margin-right: 15px;

   }
.goods-item-list {
  padding: 5px 0;
  display: flex;
 background-color: #fff;
}
.goods-item-list div{
   height: 30px;
   line-height: 30px;
   padding-left:15px; 
   margin-right: 15px;
}
.goods-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 910px;
}
.goods-item > div {
  width: 24%;
  min-width: 300px;
  height: 385px;
  overflow: hidden;
  padding: 5px 0;
}
.goods-item > div > img {
  width: 100%;
  height: 100%;
}
</style>