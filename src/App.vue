<template>
  <div id="wrapper">
      <nav class="navbar navbar-default">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i class="glyphicon glyphicon-time"></i>
            前后端交互测试
          </a>
          <ul class="nav navbar-nav">
            <li><router-link to="/login">登录</router-link></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="col-sm-3"></div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
