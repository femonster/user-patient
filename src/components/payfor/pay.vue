<template>
    <div class="pay-box">
        <div class="pay-desc">
            <p>医师 张耕恺 - 图文咨询服务 <input type="text" class="fw-times" v-model="fwtimes"> 次</p>
            <p>优惠券 (<span> 未使用优惠券 > </span>)</p>
            <p>共需支付300元</p>
        </div>
        <div class="pay-method">
            <p>支付宝支付(支持支付宝或银行卡快捷支付)</p>
            <p>微信支付(推荐安装微信5.0及以上版本的用户使用)</p>
        </div>
        <cube-button class="gopay">去支付</cube-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            fwtimes:"1"
        }
    },
    created(){
        document.title = "订单支付"
    }    
}
</script>
<style lang="stylus" scoped>
.pay-box
    width 100% 
    box-sizing border-box
    padding 10px
    .pay-desc
        line-height 1.5
        p 
            padding 10px 0
        .fw-times
            width 50px
            border 1px solid #000000
    .pay-method
        width 100% 
        p 
            height 40px
            text-indent 1em
            line-height 40px
            box-sizing border-box
            border 1px solid #333
            font-size 14px
    .gopay
        position fixed
        bottom 0
        left 0
        width 100%
</style>


