<template>
    <!-- 病历详情 -->
    <div class="h-list-box">
            <div class="h-list-header">
                <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar">
                <div class="his-btns">
                    <button>我的预约</button>
                    <button>父亲的预约</button>
                    <button>母亲的预约</button>
                </div>
            </div>
        <div class="histroy-list-scroll">
            <listview :ldata="listData" cardType="1"></listview>x
        </div>
    </div>
</template>
<script>
import Listview from 'base/listview/listview'
import { nowlist } from 'mock/nowlist'

export default {
    data(){
        return {
            listData:[]
        }
    },
    created(){
        document.title = "我的预约挂号"
        setTimeout(()=>{
            this.listData = nowlist
        },20)
    },
    components:{
        Listview
    }
}
</script>
<style lang="stylus" scoped>
.h-list-header
    display flex
    padding 10px 
    box-sizing border-box
    height 100px
    justify-content space-between
    align-items flex-end
    img 
        width 80px
        height 80px
.histroy-list-scroll
    position fixed
    top 100px
    bottom 0
    width 100%
</style>


