const About = () => import(/* webpackChunkName: "about" */ '@/pages/about.vue')
const AboutRouteList = [
    {
        // 这里的path没有使用 根路径
        // 因此url看起来会是这样子http://localhost:8080/#/index/about
        // 否则去掉个路径,  则是http://localhost:8080/#/about
        path: "about",
        name: "about",
        component: About
    }
]
export default AboutRouteList;