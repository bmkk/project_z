<template>
  <div class="login">
    <div class="login-cantainer">
      <div class="login-title">
        <div>
          <img  class="login_logo" src="" alt="" srcset="">
        </div>
        <div class="use-login">使用想去网账号登录</div>
        </div>
      <div class="login-inputs">
        <input class="uname" type="text" name="uname" placeholder="请输入用户名/邮箱">
        <input class="upwd" type="text" name="upwd" placeholder="请输入密码">
        <div class="login-checks">
          <span>记住密码</span>
          <span>忘记密码</span>
        </div>
        <input class="subm"  type="button" value="登录">
      </div>
      <div class="login-other">
        使用其他账号登录
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<style scoped>
.login {
  background-color: #ededed;
  padding: 60px 0;
}
.login-cantainer {
  background-color: #ffffff;
  width: 400px;
  height: 450px;
  margin: 0 auto;
  border-radius: 5px;
}
.login-title{
  background-color: aqua;
  height: 35%;
   display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.login_logo{
  display: block;
  border: 1px solid #C0C0C0;
  width: 80px;
  height: 80px;
  border-radius:50%;
  margin: 0 auto;
}
.use-login{
  height: 30px;
  line-height: 30px;
}
.login-inputs{
  height: 45%;
  display: flex;
  flex-direction: column;
  padding: 5px  20px;
}
.uname,.upwd{
  height: 45px;
  border-radius: 5px;
  padding-left: 20px;
  border: 1px solid #C0C0C0;
  margin-bottom: 10px;
  font-size: 16px;
}
.subm{
  height: 45px;  
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #000;
  font-size: 16px;
}
.login-checks{
  height: 25px;
  line-height: 25px;
  margin-bottom: 5px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}
</style>