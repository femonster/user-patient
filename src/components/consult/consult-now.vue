<template>
    <div class="con-now-box">
        <div class="n-header">
            <div class="doc-name">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000" alt="avatar">
                <span>张三医生</span>
            </div>
            
            <p>剩余时间：28:45</p>
            <!-- <div class="n-item">
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
            </div> -->
        </div>
        <div class="n-talk">
            <talk :isdesc="true" topnum="58"></talk>
        </div>
        <div class="todoc-detail" @click="todetail">
            前往医生主页
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
    },
    methods:{
        todetail(){
            this.$router.push('/doctor/003ArN8Z0WpjTz')
        }
    }
}
</script>
<style lang="stylus" scoped>
// .n-header
//     width 100%
//     box-sizing border-box
//     padding 10px
//     .n-item
//         display flex
//         line-height 1.8
//         padding 5px 0
//         p:first-child
//             margin-right 10px
//         img 
//             width 50px
//             height 50px
.n-header
    width 100%
    box-sizing border-box
    padding 10px
    display flex
    align-items center
    font-size 14px
    justify-content space-between
    .doc-name
        display flex
        align-items center
        font-size 14px
        img 
            width 40px
            height 40px
            border-radius 50% 
            margin-right 10px
.todoc-detail
    width 30px
    position fixed
    top 40%
    left 0
    background-color #3db9bd
    color #ffffff
    border-radius 5px 
    font-size 14px
    padding 10px 5px
    box-sizing border-box

</style>


