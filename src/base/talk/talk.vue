<template>
    <div class="talk-config" :style="`top:${topnum}px`">
            
                <div class="talk-detail">
                    <scroll>
                        <div class="talk-detail-box" ref="talkbox">
                            <div class="doc-desc" v-if="isdesc">
                                <div class="doc-one">
                                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000" alt="">
                                    <p>张二医生正在为您服务</p>
                                    <button>关注</button>
                                    <button>推荐</button>
                                </div>
                                <div class="doc-two">
                                    <router-link :to="`reservedoc`" tag="button">预约挂号</router-link>
                                    <router-link :to="`reservedoc`" tag="button">上门诊疗</router-link>
                                </div>
                            </div>
                            <p class="timer">2018/6/30 17:30</p>
                            <div class="paitent">
                                <div class="p-avatar">
                                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003DBAjk2MMfhR.jpg?max_age=2592000">
                                </div>    
                                <div class="desc">医生您好，我身体不舒服</div>
                            </div>  
                            <div class="doctor">
                                <div class="desc">多喝热水</div>
                                 <div class="p-avatar">
                                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000">
                                </div> 
                            </div>   
                        </div>
                    </scroll>  
                </div>
            
            
            <div class="talk-tool" v-if="isnow">
                <div class="yuan say">say
                </div>
                <div class="input">
                    <input type="text" v-model="mocktalk">
                </div>
                <div class="yuan emoji">emoji</div>
                <div class="yuan flie">flie</div>
                <div class="send-btn"></div>
                <button @click="sendHandle">发送</button>
            </div>      
    </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
export default {
    props:{
        topnum:{
            type:[Number,String],
            default:0
        },
        isnow:{
            type:Boolean,
            default:true
        },
        isdesc:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            mocktalk:""
        }
    },
    methods:{
        sendHandle(){
            let div = document.createElement("div")
            div.className = "paitent"
            div.innerHTML=`<div class="p-avatar">
                                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003DBAjk2MMfhR.jpg?max_age=2592000">
                            </div>
                            <div class="desc">${this.mocktalk}</div>`
            this.$refs.talkbox.appendChild(div)
            this.mocktalk = ""
        }
    },
    components:{
        Scroll
    }
}
</script>
<style lang="stylus">
.talk-config
    width 100%
    position absolute
    bottom 0
    left 0
    right 0
    background-color #eeeeee
    .talk-detail
        position absolute
        width 100%
        top 0
        left 0
        bottom 60px
        right 0
        overflow hidden
        .talk-detail-box
            width 100%
            box-sizing border-box
            padding 10px
            .doc-desc
                width 100% 
                font-size 14px
                .doc-one 
                    display flex
                    justify-content space-between
                    align-items center
                    margin-bottom 10px
                    img 
                        width 50px
                        height 50px
                        border-radius 50%
        .timer
            text-align center
            margin-top 20px
            color #999999
        .doctor
            display flex
            justify-content flex-end
            margin 10px 0
        .paitent
            display flex
            justify-content flex-start
            margin 10px 0
        .p-avatar
            width 50px
            height 50px
            margin-right 10px
            margin-left 10px
            img 
                width 100%
        .desc
            max-width 50%
            background-color #ffffff
            line-height 1.5
            font-size 14px
            padding 5px
            box-sizing border-box
            border-radius 5px


    .talk-tool
        width 100%
        position absolute
        bottom 0
        left 0
        height 60px
        box-sizing border-box
        border-top 1px solid #000000
        display flex
        justify-content space-around
        align-items flex-end
        padding-bottom 10px
        .input 
            padding 0 5px
            border-bottom  1px solid #000000
            input 
                outline none
                background-color #eeeeee
                height 100%
            
        .yuan
            width 40px
            height 40px
            border-radius 50%
            border 1px solid #000000
            line-height 40px
            text-align center
</style>



