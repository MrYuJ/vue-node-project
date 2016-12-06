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
	1.扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
	let z = { a: 3, b: 4 };
	let n = { ...z };
	n // { a: 3, b: 4 }

	2.ES6允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。
	var birth = '2000/01/01';
	var Person = {
	  name: '张三',
	  //等同于birth: birth
	  birth,
	  // 等同于hello: function ()...
	  hello() { console.log('我的名字是', this.name); }
	};
*/
new Vue({
  el: '#app',
  router,
  ...App,
})
