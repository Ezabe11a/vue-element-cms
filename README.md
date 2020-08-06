## 从零开始构建开发环境

1. `npm i -g @vue/cli` 安装vue-cli

   1. 执行`vue create vue-element-cms`

2. `npm i vuex -S` 安装vuex

   1. 在src下创建store目录，下创建modules/test.js、index.js，配置依次如下

      ```js
      export default {
          // 开启子模块命名空间，必须要开启
          namespaced:true,
          state: {
      
          },
          getters:{
      
          },
          // 用于改变、修改state，页面视图自动更新
          mutations:{
              
          },
          actions:{
      
          }
      }
      ```

      

      ```js
      import Vue from 'vue'
      import Vuex from 'vuex'
      import testStore from './modules/test';
      
      Vue.use(Vuex)
      
      const store = new Vuex.Store({
          modules:{
              test: testStore
          }
      })
      
      export default store
      ```

      

3. `npm i vue-router -S` 安装vue-router

   1. 在src下创建router.js，配置如下

      ```js
      import Vue from 'vue'
      import VueRouter from 'vue-router'
      
      Vue.use(VueRouter)
      const router = new VueRouter({
          mode: 'hash',
          routes: [
              
          ]
      
      })
      export default router
      ```

      

4. `npm i sass -S` 安装sass

5. `npm i axios -S` 安装axios

   1. 在src下创建utils/axios.js

      ```js
      import axios from 'axios'
      
      const instance = axios.create({
          baseURL: 'https://cnodejs.org/api/v1',
          timeout: 7000,
          headers: {}
      })
      
      
      // 请求拦截器：在请求被发送之前，做一些验证处理等工作
      instance.interceptors.request.use(function (config) {
          return config
      }, function (error) {
          return Promise.reject(error)
      })
      
      // 响应拦截器：在响应到达之前，先进行数据过滤
      instance.interceptors.response.use(function (response) {
          if (response.status == 200) {
              if (response.data && response.data.success) {
                  return response.data.data
              } else {
                  console.log('网络异常')
              }
          }
      }, function (error) {
          return Promise.reject(error)
      })
      
      export default instance
      ```

      

6. ` npm i element-ui -S ` 安装element-ui

   1. 使用时引入即可