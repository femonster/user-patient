<template>
    <div class="user-box">
        <div class="u-header" ref="header">
            <div class="u-top">
                <router-link :to="`/person`">个人主页</router-link>
                <p>北京市</p>
                <router-link :to="`/notice`">消息中心</router-link>
            </div>
            <div class="u-btns">
                <router-link :to="`/homelist`" tag="cube-button">家庭医生</router-link>
                <router-link :to="`/ntlist`" tag="cube-button">医疗护理</router-link>
                <router-link :to="`/consultlist`" tag="cube-button">图文咨询</router-link>
            </div>
            <nav class="doctor-nav">
                <ul>
                    <li>全部</li>
                    <li>外科</li>
                    <li>内科</li>
                    <li>儿科</li>
                    <li>五官科</li>
                    <li>妇科</li>
                    <li>...</li>
                </ul>
            </nav>
        </div>        
        <div class="doctor-list" :style="`top:${offsetH}px`">
            <scroll :data="doctorList" class="doctor-scroll">
                <div>
                    <div class="doctor-item" v-for="(item,index) in doctorList" @click="toDoc(item.id)">
                        <div class="img-box">
                            <img :src="item.avatar" alt="">
                        </div>
                        <div class="desc-box">
                            <p>医师姓名：{{item.name}}</p>
                            <p>科室：{{item.department}}</p>
                            <p>所属医院：{{item.hospital}}</p>
                            <p>个人介绍：{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </scroll>
        </div>
        <assistant></assistant>
    </div>

</template>
<script>
import Scroll from 'base/scroll/scroll'
import Assistant from 'base/assistant/assistant'
import {mock_doctor} from 'mock/mock_doctor'
export default {
    data(){
        return {
            doctorList:[],
            offsetH:0
        }
    },
    created(){
        this.doctorList = mock_doctor
    },
    mounted(){
        this.offsetH = this.$refs.header.clientHeight+20
        console.log(this.offsetH)
    },
    methods:{
        toDoc(id){
            this.$router.push(`/doctor/${id}`)
        }
    },
    components:{
        Scroll,
        Assistant
    }
}
</script>
<style lang="stylus" scoped>
.user-box
    width 100%
    box-sizing border-box
    padding 10px
    .u-header
        width 100%
        .u-top
            display flex
            justify-content space-between
            margin-bottom 15px
        .u-btns
            display flex
            justify-content space-around
            margin-bottom 10px
            button 
                margin 0 10px
        .doctor-nav
            width 100%
            padding 5px 0
            border-bottom 1px solid #333333
            ul 
                width 100% 
                display flex
                justify-content space-between
    .doctor-list
        width 100%
        position fixed
        bottom 0
        left 0
        right 0
        padding 10px
        box-sizing border-box
        background-color #eeeeee
        font-size 14px
        .doctor-scroll
            width 100%
            height 100%
            overflow hidden
        .doctor-item
            width 100%
            display flex
            padding 10px
            box-sizing border-box
            justify-content flex-start
            img 
                width 80px
                margin-right 10px
            .desc-box
                line-height 1.5
        
    
</style>


