<template>
    <div class="attention">
        <div class="nav-title">
            <p :class="{active:!isnurse}" @click="tab">医师</p>
            <p :class="{active:isnurse}"  @click="tab">护士</p>
        </div>
        <ul class="attention-list doc-attention" v-show="!isnurse">
            <li>
                <div class="img-box" @click="todoc">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000" alt="">
                    <span>张三</span>
                </div>
                <button>取消关注</button>
            </li>
            <li>
                <div class="img-box" @click="todoc">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000" alt="">
                    <span>李四</span>
                </div>
                <button>取消关注</button>
            </li>
        </ul>
        <ul class="attention-list nurse-attention" v-show="isnurse">
            <li>
                <div class="img-box" @click="tonurse">
                    <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000" alt="">
                    <span>李四</span>
                </div>
                <button>取消关注</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isnurse:false
        }
    },
    methods:{
        todoc(){
            this.$router.push('/doctor/123')
        },
        tonurse(){
            this.$router.push('/nurse/123')
        },
        tab(){
            this.isnurse = !this.isnurse
        }
    },
    created(){
        document.title = "我的关注"
    }
}
</script>
<style lang="stylus" scoped>
.attention
    width 100% 
    .nav-title
        width 100% 
        font-size 0
        border-bottom 1px solid #333333
        p 
            display inline-block 
            font-size 14px 
            text-align center 
            box-sizing border-box
            width 50% 
            padding 20px 0
            &:first-child
                border-right 1px solid #eeeeee
            &.active
                background-color #666666
                color #ffffff
    .attention-list
        width 100% 
        box-sizing border-box
        padding 10px
        li 
            width 100% 
            box-sizing border-box
            padding 15px
            display flex
            justify-content space-between
            align-items center
            &:not(:last-child)
                border-bottom 1px solid #eeeeee
            .img-box 
                img 
                    width 50px


</style>

