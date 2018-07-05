import Vue from 'vue'
import Router from 'vue-router'
import Userpage from 'components/userpage/userpage'
import Person from 'components/person/person'
import Doctor from 'components/doctor/doctor'
import Notice from 'components/notice/notice-list'
import Homelist from 'components/doctor/homedoc-list'
import Consultlist from 'components/consult/consult-list'
import Nurselist from 'components/nurse/nurse-list'
import Ntypelist from 'components/nurse/type-list'
import Nurse from 'components/nurse/nurse'
import Address from 'components/person/address'
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
        path: '/doctor/:id',
        name: 'doctor',
        component: Doctor
    }, {
        path: '/notice',
        name: 'notice',
        component: Notice
    }, {
        path: '/homelist',
        name: 'homelist',
        component: Homelist
    }, {
        path: '/consultlist',
        name: 'consultlist',
        component: Consultlist
    }, {
        path: '/nurse/:id',
        name: 'nurse',
        component: Nurse
    }, {
        path: '/nurselist',
        name: 'nurselist',
        component: Nurselist
    }, {
        path: '/ntlist',
        name: 'ntlist',
        component: Ntypelist
    }, {
        path: '/address',
        name: 'address',
        component: Address
    }]
})