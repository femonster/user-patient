<template>
    <div class="user-box">
        <a-header ref="aheader"></a-header>
        <div class="u-header" ref="header">
            <div class="u-btns">
                <router-link :to="`/consultlist`" tag="cube-button">图文咨询</router-link>
                <router-link :to="`/ntlist`" tag="cube-button">医疗护理</router-link>
                <router-link :to="`/homelist`" tag="cube-button">家庭医生</router-link>
                
            </div>
            <nav class="doctor-nav">
                <ul>
                    <li style="font-size:13px;border-right:1px solid #333;padding-right:2px;"><i class="iconfont icon-shouye2"></i>北京</li>
                    <li @click="isort=!isort;isortall=false">排序 ↓</li>
                    <li v-for="item in hot" @click="torandom">{{item}}</li>
                    <li @click="isortall=!isortall;isort=false">全部 ↓</li>
                </ul>
                <div class="sort-list" v-show="isort">
                    <ul>
<<<<<<< HEAD
                        <li>按距离</li>
                        <li>按好评</li>
                        <li>按综合</li>
=======
                         <li v-for="item in sort" @click="torandom">{{item}}</li>
                    </ul>
                </div>
                <div class="sort-list-all" v-show="isortall">
                    <ul>
                        <li v-for="item in all" @click="torandom">{{item}}</li>
>>>>>>> 2e347107301bbbdf1756262969e29a61348d4363
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
import AHeader from 'components/m-header/a-header'
import {mock_doctor} from 'mock/mock_doctor'
export default {
    data(){
        return {
            doctorList:[],
            offsetH:0,
            isort:false,
            isortall:false,
            ispay:false,
            ispropcurr:false,
            hot:["外科","内科","儿科","五官科","妇科"],
            all:["外科","内科","儿科","五官科","妇科","口腔科","中医科","皮肤科","其他"],
            sort:["按距离","按满意度","按综合"]
        }
    },
    created(){
        this.doctorList = mock_doctor
        
        if(this.$route.query.p && this.$route.query.p=="1"){
            this.ispay = true
            this.ispropcurr = true
        }

        setTimeout(()=>{
            this.ispropcurr = true 
        },5000)
    },
    mounted(){
        this.offsetH = this.$refs.header.clientHeight+60
    },
    methods:{
        toDoc(id){
            this.$router.push(`/doctor/${id}`)
        },
        torandom(){
            this.doctorList = this.doctorList.sort(function(){ return Math.random() - 0.5});
            this.isort = false;
            this.isortall = false;
        }
    },
    components:{
        Scroll,
        Assistant,
        AHeader
    }
}
</script>
<style lang="stylus" scoped>
.user-box
    width 100%
    box-sizing border-box
    .u-header
        box-sizing border-box
        padding 10px
        width 100%
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
            .sort-list-all
                position absolute
                width 
                top 0
                width 100%
                z-index 9999
                background-color #ffffff
                ul 
                    width 100%
                    display flex
                    flex-wrap wrap
                    border-top 1px solid #333333
                    li  
                        width 33%
                        text-align center
                        line-height 1.5
                        padding 5px 0
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


