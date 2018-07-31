<template>
        <div class="d-header">
            <div class="notice" v-if="isnotice">
                <p class="notice-scroll" ref="notice">
                    <marquee v-if="isdoc">今天是我的生日，来找我看病不花钱！</marquee>
                    <marquee v-else>今天是护士节，放假一天，不接受预约</marquee>
                    </p>
                <cube-button :inline="true" @click="noticeAlert">公告</cube-button>
            </div>
            <div class="doctor-intro">
                <div class="intro-l">
                    <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar">
                    <div class="i-l-btn">
                        <button>关注</button>
                        <button>推荐</button>
                        <span class="tuijian">推荐热度：98</span>
                    </div>     
                </div>
                <div class="intro-r">
                    <p>姓名：张康</p>
                    <p v-if="isdoc">科室：外科</p>
                    <p>资格证书：<a href="javascript:;">点击查看</a></p>
                    <p>所属医院：人民解放军第一医院</p>
                    <p v-if="isdoc">个人介绍:医学博士，15年临床经验</p>
                    <p v-else>个人介绍:高级护士长，15年护工经历</p>
                </div>
            </div>
            <div class="feeling" v-show="ispj">
                <div class="zx-times times">
                    <p>疗效</p>
                    <p>98</p>
                </div>
                <div class="hp-times times">
                    <p>满意度</p>
                    <p>99.7%</p>
                </div>
                <div class="cz-times times">
                    <p>{{isdoc?"诊疗人数":"护理人数"}}</p>
                    <p>1245345人次</p>
                </div>
            </div>
        </div>
        
</template>
<script>
export default {
    props:{
        isnotice:{
            type:Boolean,
            default:true
        },
        ispj:{
            type:Boolean,
            default:true
        },
        isdoc:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        noticeAlert(){
             this.$createDialog({
                type: 'alert',
                title: '2018/07/05 公告',
                content: this.$refs.notice.innerText,
                icon: 'cubeic-alert'
            }).show()
        }
    }
}
</script>
<style lang="stylus" scoped>
    .d-header
        width 100% 
        box-sizing border-box
        background-color #eeeeee
        .notice
            width 100%
            display flex
            box-sizing border-box
            padding 10px
            justify-content space-around
            background-color rgb(215,215,215)
            .notice-scroll
                width 80% 
                line-height 1.5
        .doctor-intro
            width 100%
            display flex
            box-sizing border-box
            padding 10px
            .tuijian
                font-size 12px
                display block
                text-align right
                padding-top 5px
            .intro-l
                text-align center
                margin-right 10px
                img 
                    width 80px
            .intro-r
                font-size 14px
                line-height 1.6
        .feeling
            width 100%
            display flex
            box-sizing border-box
            justify-content space-between
            padding 10px
            .times
                line-height 1.5
                font-size 14px
                text-align center
    
</style>


