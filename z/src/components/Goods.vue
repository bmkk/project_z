<template>
  <div class="goods">
    <div class="goods-box">
      <div class="goods-nav">
        <div class="goods-title">
          <div v-for="(item,i) in types" :key="i">{{item}}</div>
        </div>
        <div class="goods-all">
          <router-link class="toall" to="/shoplist">查看全部</router-link>
        </div>
      </div>
      <div class="gds-class">
          <div v-for="(item,i) in gdsclass" :key="i">
              {{item}}
          </div>
      </div>
      <div class="goods-type">
       <div class="goods-item">
          <div v-for="(item,i) in goods" :key="i">
              <img src="">
              <div>这是文字</div>
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
      types:['默认','最新','最热'],
      gdsclass:['盛夏美食清单','美容日用','品质家电'],
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
  padding: 15px 0 5px;
  justify-content: space-between;
  border-bottom: 2px solid #000;
}
.goods-all .toall{
  text-decoration: none;
  background-color: #fff;
  padding: 5px 20px ;
  border-radius:15px; 

}
.gds-class{
  display: flex;
  padding: 10px 0;
}
.gds-class div{
  padding:0 15px;
}
.goods-title{
  display: flex;
  align-items: center;
  padding-left:10px;
  border-left: 3px solid #000;
}
.goods-title div{
  margin-right: 50px;
  width: 80px;
  text-align: center;
  font-size: 20px;
  padding: 5px 0;
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
  height: 305px;
    border-radius: 15px;
}
.goods-item > div > div {
  height: 80px;
   width: 100%;
  background-color: #fff
}
</style>