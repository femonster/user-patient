import Vue from 'vue'
import Router from 'vue-router'
import Userpage from 'components/userpage/userpage'
import Person from 'components/person/person'
import Reservation from 'components/person/reservation-list.vue'

import Notice from 'components/notice/notice-list'

import Doctor from 'components/doctor/doctor'
import Famdoc from 'components/doctor/family-doc'
import Homelist from 'components/doctor/homedoc-list'
import ReserveDoc from 'components/doctor/reserve-doctor'
import Fampay from 'components/doctor/pay-family'

import Nurselist from 'components/nurse/nurse-list'
import Ntypelist from 'components/nurse/type-list'
import Nurse from 'components/nurse/nurse'
import Hisnurselist from 'components/nurse/hisnurse-list'
import Hisnursedetail from 'components/nurse/hisnurse-detail'
import Reservenurse from 'components/nurse/reserve-nurse'

import Address from 'components/person/address'
import Attention from 'components/person/attention'
import History from 'components/person/history'
import Family from 'components/person/family'

import Historylist from 'components/casehistory/history-list.vue'
import Hisdetail from 'components/casehistory/history-detail.vue'
import Hischufang from 'components/casehistory/hischufang.vue'

import Consultlist from 'components/consult/consult-list'
import Hiscondetail from 'components/consult/hiscon-detail.vue'
import Hisconlist from 'components/consult/hiscon-list.vue'
import Consultpay from 'components/consult/consult-pay.vue'
import Consultnow from 'components/consult/consult-now.vue'

import Pay from 'components/payfor/pay.vue'

import Eval from 'components/endpage/evaluate'
import EndPage from 'components/endpage/endpage'
import Complain from 'components/endpage/complain'

import Review from 'components/review/review'
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
    }, {
        path: '/attention',
        name: 'attention',
        component: Attention
    }, {
        path: '/history',
        name: 'history',
        component: History
    }, {
        path: '/family',
        name: 'family',
        component: Family
    }, {
        path: '/famdoc',
        name: 'famdoc',
        component: Famdoc
    }, {
        path: '/hislist',
        name: 'hislist',
        component: Historylist
    }, {
        path: '/hisdetail/:id',
        name: 'hisdetail',
        component: Hisdetail
    }, {
        path: '/hiscondetail/:id',
        name: 'hiscondetail',
        component: Hiscondetail
    }, {
        path: '/hisconlist',
        name: 'hisconlist',
        component: Hisconlist
    }, {
        path: '/hisnurselist',
        name: 'hisnurselist',
        component: Hisnurselist
    }, {
        path: "/hisnursedetail/:id",
        name: 'hisnursedetail',
        component: Hisnursedetail
    }, {
        path: "/hischufang",
        name: 'hischufang',
        component: Hischufang
    }, {
        path: "/reservation",
        name: 'reservation',
        component: Reservation
    }, {
        path: "/pay",
        name: 'pay',
        component: Pay
    }, {
        path: "/reservenurse",
        name: 'reservenurse',
        component: Reservenurse
    }, {
        path: "/reservedoc",
        name: 'reservedoc',
        component: ReserveDoc
    }, {
        path: "/fampay",
        name: 'fampay',
        component: Fampay
    }, {
        path: "/connow",
        name: 'consultnow',
        component: Consultnow
    }, {
        path: "/conpay",
        name: 'consultpay',
        component: Consultpay
    }, {
        path: "/review",
        name: 'review',
        component: Review
    }, {
        path: "/endpage",
        name: 'endpage',
        component: EndPage
    }, {
        path: "/evaluate",
        name: 'evaluate',
        component: Eval
    }, {
        path: "/complain",
        name: 'complain',
        component: Complain
    }]
})