<template>
  <div class="head">
    <div class="header">
      <div class="header_logo">logo</div>
      <div class="header_nav">导航</div>
      <div class="header_login">登录</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myheader",
  data() {
    return {};
  }
};
</script>

<style scoped>
.header {
  display: flex;
  box-sizing: border-box;
  height: 50px;
  color: #fff;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
  align-items: center;
}
.header > div{
height: 50px;
  line-height: 50px;
}
.header > div:nth-child(1) {
  width: 10%;
  background-color: rgb(127, 209, 73);
}
.header > div:nth-child(2) {
  width: 80%;
  background-color: rgb(199, 201, 198);
}
.header > div:nth-child(3) {
  width: 10%;
  background-color: rgb(40, 19, 133);
}
</style>