<template>
    <div class="end">
        <div class="pending-desc" v-show="status">
            <p>已经通知医生您已到达，请耐心等待。</p>
            <p>您的就医验证码为 <span>456234</span> </p>
            <p>在您之前已经候诊的人有 <span> 5 </span>人</p>
        </div>
        <div class="end-desc" v-show="!status">
            <p>此次问诊已经完成，预祝您早日康复！</p>
        </div>
        <a href="javascript:;" class="debug-btn" @click="status=!status">切换状态（debug）</a>
        <div class="end-btns" ref="endbtns">
            <cube-button class="pj" @click="toeval">我要评价</cube-button>
            <cube-button class="jy" @click="tocom" :outline="true">投诉建议</cube-button>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            status:true
        }
    },
    watch:{
        status(newval){
            let eb = this.$refs.endbtns;
            if(newval){
                eb.style.transform = `translate3d(0,110px,0)`
            }else{
                eb.style.transform = `translate3d(0,0,0)`
            }
        }
    },
    methods:{
        toeval(){
            this.$router.push('/evaluate')
        },
        tocom(){
            this.$router.push('/complain')
        }
    }
}
</script>
<style lang="stylus" scoped>
.pending-desc
    padding-top 40px
    width 100%
    p 
        padding 10px
        text-align center
        span 
            font-size 18px
            color red
            font-weight bold
.end-desc
    box-sizing border-box
    padding 30px 10px 
    text-align center
.debug-btn
    position absolute
    bottom 130px
    left 10px
.end-btns
    transform translate3d(0,110px,0)
    transition transform 0.3s ease
    width 100%
    position fixed
    bottom 0
    left 0
    .pj 
        margin-bottom 10px
</style>


