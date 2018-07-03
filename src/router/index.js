import Vue from 'vue'
import Router from 'vue-router'
import Userpage from 'components/userpage/userpage'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'userpage',
        component: Userpage
    }]
})