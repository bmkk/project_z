import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)//等价于render: function(h) { return h(App);}render方法的实质就是生成template模板vue调用render方法时, 会传入一个createElement函数作为参数(也就是h的实参是createElement函数),createElement用于在页面中创建元素,createElement以App为参数进行调用, 即把App的内容创建到页面中的'#app'作用域里
}).$mount('#app')
