<template>
  <div class="goods">
    <div class="goods-box">
      <div class="goods-nav">
        <div class="goods-title">猫粮</div>
        <div class="goods-search">搜索框</div>
      </div>
      <div class="goods-type">
        <div class="goods-item-list">鸡肉</div>
        <div class="goods-item">
          <div v-for="(item,i) in goods" :key="i">
              <img :src="item.img_url">
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
      goods: [
          {img_url: "@/assets/goods/1.jpg"},
          {img_url: "../../assets/goods/2.jpg"},
          {img_url: "../../src/assets/goods/3.jpg"},
          {img_url: "../assets/goods/4.jpg"},
          {img_url: "/src/assets/goods/5.jpg"},
          {img_url: "assets/goods/6.jpg"},
      ]
    };
  }
};
</script>

<style scoped>
.goods {
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid red;
  width: 92%;
  margin: 0 auto;
}
.goods-nav {
  display: flex;
  border-bottom: 1px solid #000;
  padding: 25px 0;
  justify-content: space-between;
}
.goods-item-list {
  border-bottom: 1px solid #000;
  padding: 15px 0;
}
.goods-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 910px;
}
.goods-item > div {
  width: 33%;
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