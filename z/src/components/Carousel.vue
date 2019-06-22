// 轮播图组件
<template>
  <div class="Carousel">
    <div class="Carousel-cantianer">
      <div class="Carousel-box">
          <img src="@/assets/index/1.png" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {};
  }
};
</script>

<style scoped>
.Carousel {
  box-sizing: border-box;
  padding: 15px 0;
}
.Carousel-cantianer {
  width: 92%;
  margin:0 auto;
  height: 500px;
  border-radius: 5px;
  overflow: hidden;
}
.Carousel-box img{
    width: 100%;
    height: 500px;
}
</style>