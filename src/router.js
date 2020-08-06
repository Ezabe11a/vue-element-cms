import Vue from 'vue';
import VueRouter from 'vue-router'; 

Vue.use(VueRouter)

import routes from '@/views/'
const Login=()=>import('./components/login/Login.vue')
const Regist=()=>import('./components/regist/Regist.vue')

const arr =[]

routes.map(ele => {
    if(ele.children) {
        ele.children.map(ele => {
            arr.push({path: ele.path, component: ele.component})
        })
    }
})

let router = new VueRouter({
    routes: [
        ...arr,
        { path: '/login', components: {login: Login}},
        { path: '/regist', components: {regist: Regist}},
        { path: '/*', redirect:'/home'}
    ]
})

// 路由守卫
router.beforeEach(function(to, from, next) {
    if (to.path != '/login' && to.path != '/regist') {
      if(localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      } 
    } else {
      next()
    }
  })
  

export default router