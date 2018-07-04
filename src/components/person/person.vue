<template>
    <div class="person-box">
        <div class="person-head">
            <div class="img-box">
                <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar">
            </div>
            <div class="desc">
                <p class="desc-phone">18612355232 <button>更换号码</button></p>
                <p>账户余额：345231 元</p>
                <p>优 惠 券：34634 张</p>
            </div>
        </div>
        <div class="person-btns">
            <cube-button>我的病历</cube-button>
            <cube-button>家庭医生</cube-button>
            <cube-button>我的处方</cube-button>
            <cube-button>我的咨询</cube-button>
            <cube-button>我的预约挂号</cube-button>
            <cube-button>我的关注</cube-button>
            <cube-button>既往病史</cube-button>
            <cube-button>家庭成员管理</cube-button>
            <cube-button>我的护理</cube-button>
            <cube-button>地址管理</cube-button>
            <cube-button>联系客服</cube-button>
            <cube-button>意见反馈</cube-button>
        </div>
        <div class="person-checks">
            <cube-checkbox>绑定微信账号</cube-checkbox>
            <cube-checkbox>绑定QQ账号</cube-checkbox>
            <cube-checkbox>绑定微博账号</cube-checkbox>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        document.title = "个人中心"
    }
}
</script>
<style lang="stylus" scoped>
.person-box
    width 100% 
    .person-head
        width 100%
        display flex
        padding 10px
        box-sizing border-box
        background-color #eeeeee
        img 
            width 80px
        .desc
            margin-left 10px
            line-height 1.8
            .desc-phone
                font-weight bold
                font-size 17px
    .person-btns
        width 100%
        padding 10px
        margin-top 20px
        display flex
        flex-wrap wrap
        justify-content space-around
        box-sizing border-box
        background-color #eeeeee
        button 
            width 40%
            margin-bottom 10px
</style>


