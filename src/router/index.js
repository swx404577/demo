import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import createNLS from '@/components/CreatNLS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
	  component: HelloWorld,
	  children:[
		{
			path: '/Nls',
			name: 'createNLS',
			component: createNLS
		}
	  ]
	},
	
  ]
})
