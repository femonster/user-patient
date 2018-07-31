<template>
    <div class="nurse-box">
        <d-header :isdoc="false"></d-header>
        <div class="func-btns">
            <button 
            v-for="(item,index) in btnsmock"
            class="func-btn" 
            :class="{currnet:index===currentIndex}" 
            @click="checkBtn(index)"
            >{{item.type}}
            <br/>
            {{item.price}}
            </button>
        </div>
        <div class="doc-imgs">
            <h4>护士风采</h4>
            <div class="imgs-box">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000">
            </div>
        </div>
        <div class="doc-comment">
            <h4>热门评价 <router-link :to="`/review?t=n`">全部评价</router-link></h4>
            <div class="comments-box">
                <ul>
                    <li>
                        <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003LaMHm42u7qS.jpg?max_age=2592000" alt="">
                        <div class="c-desc">
                            <p>张浪2 <span>❤❤❤</span></p>
                            <p>我觉得很好我得好我觉得很好我好我觉得很好</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg?max_age=2592000" alt="">
                        <div class="c-desc">
                            <p>张浪3 <span>❤❤❤❤</span></p>
                            <p>我觉得很好差不多</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004EyqQS2hMS6V.jpg?max_age=2592000" alt="">
                        <div class="c-desc">
                            <p>张浪4 <span>❤❤</span></p>
                            <p>我觉得一般</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000000hNnWC3kko2c.jpg?max_age=2592000" alt="">
                        <div class="c-desc">
                            <p>张浪5 <span>❤❤❤❤❤</span></p>
                            <p>张护士特别负责，认真</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <cube-button class="pay-btn" @click="nursepay">({{btnsmock[currentIndex].type}})购买</cube-button>
    </div>
</template>
<script>
import DHeader from 'components/m-header/d-header'
export default {
    data(){
        return {
            currentIndex:0,
            btnsmock:[{
                type:"肌肉/皮下注射",
                price:"￥50元/次"
            },{
                type:"婴幼儿护理",
                price:"￥250元/月"
            },{
                type:"产后催乳",
                price:"￥250元/次"
            },{
                type:"尿管护理",
                price:"￥250元/次"
            },{
                type:"健康管理",
                price:"￥250元/次"
            }]
        }
    },
    methods:{
        checkBtn(index){
            this.currentIndex = index
        },
        nursepay(){
            this.$router.push("/reservenurse")
        }
    },
    created(){
        document.title = "护士详情"
        this.currentIndex = this.$route.query.t?Number(this.$route.query.t):0;
        // if(this.$route.query.t=="home"){
        //     this._tohome()
        // }
    },
    components:{
        DHeader
    }
}
</script>
<style lang="stylus" scoped>
.nurse-box
    padding-bottom 40px
    .func-btns
        width 100%
        display flex
        box-sizing border-box
        justify-content space-around
        padding 10px
        .func-btn
            width 26%
            line-height 2
        .currnet
            background-color #333333
            color #ffffff
    .doc-imgs
        box-sizing border-box
        width 100%
        padding 10px
        h4
            margin 5px 0
        img 
            width 50px
    .doc-comment
        width 100%
        padding 10px
        box-sizing border-box
        margin-bottom 20px
        h4
            margin 5px 0
            position relative
            a 
                position absolute
                right 0
        ul
            width 100%
            border 1px solid #333333
            li
                width 100% 
                box-sizing border-box
                display flex
                padding 10px
                font-size 14px
                position relative
                &:not(:last-child)
                    border-bottom 1px solid #eeeeee
                img 
                    width 40px
                    height 40px
                    margin-right 10px
                .c-desc
                    line-height 1.5
    .pay-btn
        position fixed
        bottom 0
        left 0
</style>


