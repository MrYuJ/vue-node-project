import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
	{
		path : '/',
		component : Login
	},
	{
		path : '/Login',
		component : Login
	},
];
const router = new VueRouter({routes});

/*
	扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
	let z = { a: 3, b: 4 };
	let n = { ...z };
	n // { a: 3, b: 4 }
*/
new Vue({
  el: '#app',
  router,
  ...App,
})
