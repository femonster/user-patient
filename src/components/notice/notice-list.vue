<template>
        <!--公告列表  -->
    <div class="notice-box">
        <div class="n-list">
             <listview :ldata="listData" cardType="3" @select="select"></listview>
        </div>
    </div>
    
</template>
<script>
import Listview from 'base/listview/listview'
import {mock_notice} from 'mock/mock_notice'
export default {
    data(){
        return {
            listData:[]
        }
    },
    created(){
        document.title="消息中心"
        setTimeout(()=>{
            this.listData = mock_notice
        },20)
    },
    methods:{
        select(item) {
            this.$createDialog({
                type: 'alert',
                title: `${item.time}`,
                content: `${item.notice}`
            }).show()
        }
    },
    components:{
        Listview
    }
}
</script>
<style lang="stylus" scoped>
.n-list 
    width 100%
    position fixed
    top 0
    bottom 0
</style>


