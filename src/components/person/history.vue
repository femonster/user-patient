<template>
    <div class="history-box">
        <div class="h-desc">
            <div class="h-item">
                <label>真实姓名:</label>
                <p>张三</p>
            </div>
            <div class="h-item">
                <label>真实年龄:</label>
                <p>23</p>
            </div>
            <div class="h-item">
                <label>性别:</label>
                <p>男</p>
            </div>
            <div class="h-item">
                <label>身份证:</label>
                <p>142***************14</p>
            </div>
            <div class="h-item">
                <label>既往病史:</label>
                <p>
                    以前做过手术，割阑尾。住过院。以前做过手术，割阑尾。住过院以前做过手术，割阑尾。住过院以前做过手术，割阑尾。住过院以前做过手术，割阑尾。住过院
        
                </p>
            </div>
            <div class="h-item">
                <label>检查报告</label>
                <p>
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000000hNnWC3kko2c.jpg?max_age=2592000" alt="">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004EyqQS2hMS6V.jpg?max_age=2592000" alt="">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000000jnR7q3pCzYG.jpg?max_age=2592000" alt="">
                    <span class="upload-btns">+</span>
                </p>
            </div>
        </div>
        <p class="h-notice">*既往病史 于2018年05月03日被修改</p>
        <div class="btns-wrap">
            <cube-button class="update-btn cancel" :outline="true" @click="toprev">返回</cube-button>
            <cube-button class="update-btn" @click="toprev">确认</cube-button>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        document.title = "既往病史"
    },
    methods:{
        toprev(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>
.history-box
    width 100% 
    box-sizing border-box 
    padding 10px 
    .h-item
        display flex
        box-sizing border-box 
        padding 15px 0
        .upload-btns
            vertical-align top
            display inline-block
            width 50px
            height 50px
            text-align center
            line-height 50px
            font-size 28px
            border 1px solid #eee 
            box-sizing border-box
        &:not(:last-child)
            border-bottom 1px solid #eeeeee
        label 
            width 25%
        p 
            width 75%
            img 
                width 50px
    .h-notice
        text-align right 
        font-size 14px
        color red 
    .update-btn
        position fixed
        width 50% 
        bottom 0
        right 0
    .cancel
        left 0

</style>


