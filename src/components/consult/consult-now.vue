<template>
    <div class="con-now-box">
        <div class="n-header">
            <div class="n-item">
                <p>当前患者</p>
                <p>张丹丹 34岁 12431431413413413</p>
            </div>
            <div class="n-item">
                <p>患者病情</p>
                <p>头晕，发烧，恶心。</p>
            </div>
            <div class="n-item">
                <p>检查报告</p>
                <p>
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000">
                </p>
            </div>
             <div class="n-item">
                <p>剩余咨询时间</p>
                <p>
                    28:45 （最长30分钟）
                    <router-link :to="`conpay`" tag="button">延长时间</router-link>
                </p>
            </div>
        </div>
        <div class="n-talk">
            <talk :isdesc="true" topnum="200"></talk>
        </div>
    </div>
</template>
<script>
import Talk from "base/talk/talk"
export default {
    created(){
        document.title="图文咨询"
    },
    components:{
        Talk
    }
}
</script>
<style lang="stylus" scoped>
.n-header
    width 100%
    box-sizing border-box
    padding 10px
    .n-item
        display flex
        line-height 1.8
        padding 5px 0
        p:first-child
            margin-right 10px
        img 
            width 50px
            height 50px
</style>


