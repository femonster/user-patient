<template>
        <div class="d-header">
            <div class="notice">
                <p class="notice-scroll">
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
            <div class="feeling">
                <div class="zx-times times">
                    <p>咨询人数</p>
                    <p>23442次</p>
                </div>
                <div class="hp-times times">
                    <p>好评率</p>
                    <p>99.7%</p>
                </div>
                <div class="cz-times times">
                    <p>出诊人数</p>
                    <p>1245345人次</p>
                </div>
            </div>
        </div>
        
</template>
<script>
export default {
    props:{
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
                content: '今天是我的生日，来找我看病不花钱！',
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


