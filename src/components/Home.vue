<template>
  <div class="home">
    <h1>Home</h1>
    <button class="btn btn-success" @click="goToMenu">Let's order!</button>
  </div>
</template>


<script>
  export default {
    methods:{
      goToMenu:function(){
        /*跳转到上一次浏览的页面*/
        this.$router.go(-1);
        /*指定跳转的地址*/
        this.$router.replace('/menu');
        /*指定跳转到路由的名字下*/
        this.$router.replace({name:'homeLink'});
        /*通过push进行跳转*/
        this.$router.push('/menu');
        /*通过pushi跳转到指定路由的名字下*/
        this.$router.push({name:'homeLink'});
      }
    }
  }
</script>
