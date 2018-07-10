<template>
    <div class="doctor-box">
        <d-header></d-header>
        <div class="func-btns">
            <button class="func-btn tw-btn" data-check='tw' :class="{currnet:ischeck1}" @click="checkBtn">图文咨询<br/>￥50/次</button>
            <button class="func-btn jt-btn" data-check='jt' :class="{currnet:ischeck2}" @click="checkBtn">家庭医生<br/>￥250/月</button>
            <button class="func-btn gh-btn" data-check='gh' :class="{currnet:ischeck3}" @click="checkBtn">挂号诊疗<br/>￥250/次</button>
        </div>
        <div class="doc-imgs">
            <h4>医师风采</h4>
            <div class="imgs-box">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000">
                <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000">
            </div>
        </div>
        <div class="doc-comment">
            <h4>热门评价 <a href="javascript:;">查看全部</a></h4>
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
                            <p>张医生特别负责，认真</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <cube-button class="pay-btn">({{btntext}})购买</cube-button>
    </div>
</template>
<script>
import DHeader from 'components/m-header/d-header'
export default {
    data(){
        return {
            btntext:"图文咨询",
            ischeck1:true,
            ischeck2:false,
            ischeck3:false
        }
    },
    methods:{
        _tohome(){
            this.btntext = "家庭医生"
            this.ischeck1=false
            this.ischeck2=true
            this.ischeck3=false
        },
        _totw(){
            this.btntext = "图文咨询"
            this.ischeck1=true
            this.ischeck2=false
            this.ischeck3=false
        },
        _togh(){
            this.btntext = "挂号诊疗"
            this.ischeck1=false
            this.ischeck2=false
            this.ischeck3=true
        },
        checkBtn(event){
            var types = event.target.dataset.check 
            if(types=="tw"){
                this._totw()
            }else if(types=="jt"){
                this._tohome()
            }else{
                this._togh()
            }
        }
    },
    created(){
        document.title = "医生详情"
        if(this.$route.query.t=="home"){
            this._tohome()
        }
    },
    components:{
        DHeader
    }
}
</script>
<style lang="stylus" scoped>
.doctor-box
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


