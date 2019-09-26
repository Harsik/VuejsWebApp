import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import Signup from '../components/Signup'

Vue.use(VueRouter)
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/Signup',
			name: 'Signup',
			component: Signup
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
