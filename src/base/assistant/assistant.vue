<template>
    <div class="assistant" :class="{current:iscurr}">
        <div class="ass-head">
            <span @click="callAss">智能助手</span>
        </div>
        <div class="ass-content">
            <div class="ass-talk">
                <p>hi,耕恺,我是你的智能助理小Z, 有什么可以帮你的吗？</p>
            </div>
            <ul>
                <li>我要完善既往病史</li>
                <li>挂号咨询，挂什么科室</li>
                <li>上传检查报告分析</li>
            </ul>
        </div>
        <div class="ass-input">
            <cube-input :placeholder="`我要说点什么`"></cube-input>
            <cube-button :inline="true">发送</cube-button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                iscurr:false
            }
        },
        methods:{
            callAss(){
                this.iscurr = this.iscurr ? false : true
            }
        }
    }
</script>
<style lang="stylus" scoped>
.assistant
    position fixed
    bottom 0
    left 0
    width 100%
    background-color #ffffff
    transform: translate3d(0, 95%, 0)
    transition transform 0.3s ease
    .ass-head
        width 100%
        background-color #999999
        position relative
        height 20px
        span 
            display inline-block
            text-align center
            width 70px
            height 40px
            font-size 14px
            line-height 40px
            top -20px
            left 50% 
            transform translateX(-50%)
            background-color rgb(61,185,189)
            color #ffffff
            position absolute
            border-radius 10px
    .ass-content
        width 100%
        background-color #eeeeee 
        padding 10px 5px
        box-sizing border-box
        .ass-talk
            max-width 60% 
            line-height 1.5
            border-radius 5px 
            font-size 14px
            background-color #ffffff
            padding 5px
        ul 
            width 100% 
            padding 3px
            margin-top 10px
            margin-bottom 10px
            box-sizing border-box
            background-color #ffffff
            border-radius 5px 
            li 
                height 40px
                box-sizing border-box
                line-height 40px
                border-bottom 1px solid #eeeeee
                text-indent 1em
    .ass-input
        width 100% 
        display flex
        button 
            width 30%
        .cube-input
            width 70%
.current
    transform translate3d(0,0,0)




</style>



