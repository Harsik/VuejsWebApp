import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import InspireView from '../components/InspireView'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Logout from '../components/Logout'
import Profile from '../components/Profile'
import FileList from '../components/FileList'

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
			path: '/Inspire',
			name: 'Inspire',
			component: InspireView
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
			path: '/Logout',
			name: 'Logout',
			component: Logout
		},
		{
			path: '/Profile',
			name: 'Profile',
			component: Profile
		},
		{
			path: '/FileList',
			name: 'FileList',
			component: FileList
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
