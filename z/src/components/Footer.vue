// 这是公用的脚步组件
<template>
  <div class="myfooter">
       <img src="@/assets/imgs/index/footer.png" alt="" srcset="">
  </div>
</template>
<script>
export default {
  name: 'myfooter',
  data() { 
    return {

    }
  }
 }
</script>

<style scoped>
.myfooter{
    width: 100%;
    height: 255px;
    background-color: #545454;
    box-sizing: border-box;
    margin-top: 15px; 
}
</style>