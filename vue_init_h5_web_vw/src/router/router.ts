import Vue from 'vue'
import Router from 'vue-router'
// 主应用程序入口
import App from "@/App.vue"
import Index from "@/pages/index.vue";
// 路由按照模块划分
// 模块一
 import HomeRouteList from "./route_modules/home";
// 模块二
import AboutRouteList from "./route_modules/about";

const IndexChildrenRoutes = [...HomeRouteList,...AboutRouteList]
Vue.use(Router)
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: App,
      redirect: {
        name: "index"
      },
      children: [
        {
          path: "/index",
          name: "index",
          component: Index,
          // 这里是默认请求重定向,可以进行更改,一般推荐使用name
          redirect:{
            name:"home"
          },
          // 从这里开始往下,都是以模块划分的路由,每一个路由都需要引入
          children: IndexChildrenRoutes
        },
      ]
    },
  ]
})
