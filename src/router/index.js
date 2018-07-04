import Vue from 'vue'
import Router from 'vue-router'
import Userpage from 'components/userpage/userpage'
import Person from 'components/person/person'
import Doctor from 'components/doctor/doctor'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'userpage',
        component: Userpage
    }, {
        path: '/person',
        name: 'person',
        component: Person
    }, {
        path: '/doctor',
        name: 'doctor',
        component: Doctor
    }]
})