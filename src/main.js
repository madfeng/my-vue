// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/bootstrap.min.css'
import VueRouter from 'vue-router'
import App from './App'
import Header from './components/Header'
import Home from './components/Home'
import Menu from  './components/Menu'
import About from './components/about/About.vue'
import Admin from  './components/Admin.vue'
import Login from  './components/Login.vue'
import Register from  './components/Register'
/*二级路由*/
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
import History from './components/about/History'
/*三级路由*/
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */

const router= new VueRouter({
  routes:[
    {path:'/',name:'homeLink',component:Home},/*给当前路由添加name属性*/
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[/*二级路由的默认展示模块*/
      {path:'/about/contact',component:Contact,redirect:'/about/contact/personName',name:"contactLink",children:[/*三级路由的默认展示*/
        {path:'/about/contact/phone',name:'phoneNumber',component:Phone},
        {path:'/about/contact/personName',name:'personName',component:PersonName},
      ]},
      {path:'/about/delivery',component:Delivery,name:"deliveryLink"},
      {path:'/about/orderingGuide',component:OrderingGuide,name:"orderingGuideLink"},
      {path:'/about/history',component:History,name:"historyLink"}
    ]},
    {path:'/admin',name:'adminLink',component:Admin},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    {path:'*',redirect:'/'},/*若是用户输入的地址没有包含以上路由，可以指定租后跳转的位置*/
  ],
  mode:'history',
});
/*全局守卫 ----进入组件之后
---用户在未登录的情况下，只能有登录和注册的操作*/
/*router.beforeEach((to,from,next)=>{
  if(to.path == '/login' || to.path == '/register'){
    next();
  }else{
    alert("您还没有登录，请先登录");
    next('/login');
  }
  /!*alert("您还没有登录，请先登录");
  next();*!/
  /!*判断store.gettes.isLogin === false
  * if(to.path == '/login' || to.path == '/register'){
  *
  * }
  *
  * *!/
})*/
//后置钩子函数----进入组件之前
router.afterEach((to,from)=>{
  alert("after each")
});
/*导航守卫*/
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})






















