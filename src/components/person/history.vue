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
                </p>
            </div>
        </div>
        <p class="h-notice">*既往病史 于2018年05月03日被修改</p>
        <cube-button class="update-btn">修改病史</cube-button>
    </div>
</template>
<script>
export default {
    created(){
        document.title = "既往病史"
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
        width 100% 
        bottom 0
        left 0
</style>


