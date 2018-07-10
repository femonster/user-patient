<template>
    <div class="pay-fam-box">
        <div class="pay-item pay-header">
            <h4>张三 - 家庭医生服务</h4>
            <p>
                <span>免费预约挂号</span>
                <span>上面诊疗（1次）</span>
                <span>免费图文资讯</span>
            </p>
        </div>
        <div class="pay-item pay-desc">
            <h4>服务时长</h4>
            <p class="fam-time">
                <span class="current">1个月（3000元）</span>
                <span>3个月（5000元）</span>
                <span>6个月（7000元）</span>
                <span>12个月（9000元）</span>
            </p>
            <p class="absu fam-expire">服务到期时间<span>2019-07-07</span></p>
        </div>
        <div class="pay-item pay-yh">
            <p class="absu">优惠券<span>暂无可使用的优惠券</span></p>
            <p class="absu">共需支付<span>1500元</span></p>    
        </div>
        <div class="pay-item pay-method">
            <h4>选择支付方式</h4>
            <p>支付宝</p>
            <p>微信</p>
        </div>
        <cube-button class="pay-btn" @click="topay">去支付</cube-button>
    </div>
</template>
<script>
export default {
    created(){
        document.title = "订单支付"
    },
    methods:{
        topay(){
            this.$router.push("/famdoc")
        }

    }
}
</script>
<style lang="stylus" scoped>
.pay-fam-box
    width 100%
    .pay-item
        width 100%
        box-sizing border-box
        padding 10px
        line-height 1.5
        border-bottom 1px solid #eeeeee
        margin-bottom 10px
        h4 
            font-weight bold
    .pay-header
        span 
            font-size 14px
            background #333333
            color #ffffff
            padding 2px 
            display inline-block
    .pay-desc
        .fam-time
            font-size 14px
            margin-bottom 10px
            span 
                display inline-block
                width 45%
                padding 10px 0
                box-sizing border-box
                margin-bottom 5px
                text-indent 1em
                border 1px solid #666666
                &.current
                    background-color #666666
                    color #ffffff
    .absu
        position relative
        span 
            position absolute
            right 0
    .pay-btn
        position fixed
        bottom 0
        left 0
</style>


