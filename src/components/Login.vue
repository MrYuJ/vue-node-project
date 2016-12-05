<template>
  <div class="jumbotron">
    <h1 class="title">登录</h1>
   	<form class="form-horizontal" role="form">
   	  <div class="form-group">
   	    <label for="inputEmail3" class="col-sm-2 control-label">账号</label>
   	    <div class="col-sm-10">
   	      <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account">
   	    </div>
   	  </div>
   	  <div class="form-group">
   	    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
   	    <div class="col-sm-10">
   	      <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
   	    </div>
   	  </div>
   	  <div class="form-group">
   	    <div class="col-sm-offset-2 col-sm-10">
   	      <button type="submit" class="btn btn-default" @click="login">登录</button>
   	    </div>
   	  </div>
   	</form>
  </div>
</template>

<script>
	export default {
    data() {
        return {
            account : '',
            password : ''
        }
    },
    methods:{
      login() {
        this.$http.get('/api/login/getAccount')
          .then((response) => {
            console.log(response)
            // 响应成功回调
            let params = { 
              account : this.account,
              password : this.password
            };
            return this.$http.post('/api/login/createAccount',params);
          })
          .then((response) => {
            console.log(response)
          })
          .catch((reject) => {
            console.log(reject)
          });
        }
      }
    }
</script>

<style>
	.title{
		text-align: center;
	}	
</style>