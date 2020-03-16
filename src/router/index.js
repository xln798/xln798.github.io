import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

let router=new Router({
    mode:"history",
    routes:[{
        path:"/",
        component:()=>import("../components/service.vue"),
        // children:[
        //     {path:"/index/subpage/:id",component:()=>import("../components/Home.vue"),name:"subpage"}
        // ]
        },{
            path:"/login",
            component:()=>import("../components/login.vue"),
            // children:[
            //     {path:"/index/subpage/:id",component:()=>import("../components/Home.vue"),name:"subpage"}
            // ]
            },{
                path:"/detail",
                component:()=>import("../components/detail.vue"),
                // children:[
                //     {path:"/index/subpage/:id",component:()=>import("../components/Home.vue"),name:"subpage"}
                // ]
                }]
})
export default router