<template>
  <div class="head">
    <div class="header">
      <div class="header_logo">
        <img src="@/assets/imgs/index/logo.png" alt="" srcset="">
      </div>
      <div class="header_box">
        <input type="text" placeholder="搜索商品">
        <span>新用户注册首单立减100元</span>
        <span>联系客服</span>
        <span>关注我们</span>
      </div>
      <div class="header_login">
        <router-link class="toLogin" to="/login">登录|注册</router-link>
      </div>
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
  height: 80px;
  background-color: #ededed;
  padding: 0 4%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
}
.header_logo img{
  height:80px;
  width: 80px;
  margin-right: 300px;
}
.header_box input{
  outline: none;
  width: 250px;
  border-radius: 30px;
   height: 30px;
   line-height: 30px;
   padding-left:25px ;
   border: 1px solid #ededed;
}
.header_box span{
  padding: 0 15px;
  color: #BFC2C6;
}
.toLogin{
  height: 30px;
   line-height: 30px;
 text-decoration: none;
}
</style>