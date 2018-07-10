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
                    <li @click="isort=!isort">排序 ↓</li>
                    <li>外科</li>
                    <li>内科</li>
                    <li>儿科</li>
                    <li>五官科</li>
                    <li>妇科</li>
                    <li>全部 ↓</li>
                </ul>
                <div class="sort-list" v-show="isort">
                    <ul>
                        <li>按距离</li>
                        <li>按好评</li>
                        <li>按忘了</li>
                    </ul>
                </div>
            </nav>
        </div>        
        <div class="doctor-list" :style="`top:${offsetH}px`">
            <scroll :data="doctorList" class="doctor-scroll">
                <div>
                    <div class="doctor-item" v-for="(item,index) in doctorList" @click="toDoc(item.id)" :key="index">
                        <div class="img-box">
                            <img :src="item.avatar" alt="">
                        </div>
                        <div class="desc-box">
                            <p>医师姓名：{{item.name}}</p>
                            <p>科室：{{item.department}}</p>
                            <p>所属医院：{{item.hospital}}</p>
                            <p>诊疗人数：{{item.peoplenum}}</p>
                            <p>好评度：{{item.goodnum}}</p>
                        </div>
                    </div>
                </div>
            </scroll>
        </div>
        <assistant :ispay="ispay" :ispropcurr="ispropcurr"></assistant>
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
            offsetH:0,
            isort:false
        }
    },
    created(){
        this.doctorList = mock_doctor
        if(this.$route.query.p && this.$route.query.p=="1"){
            this.ispay = true
            this.ispropcurr = true

        }
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
            position relative
            border-bottom 1px solid #333333
            .sort-list
                position absolute
                width 100% 
                bottom -110px
                z-index 9999
                background-color #ffffff
                ul  
                    width 100%
                    display block
                    li 
                        line-height 1.5
                        padding 5px 0
                        text-indent 1em
                        box-sizing border-box
                        &:not(:last-child)
                            border-bottom 1px solid #eeeeee
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


