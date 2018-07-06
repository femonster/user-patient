<template>
    <div class="famdoc-box">
        <d-header :isnotice="false"></d-header>
        <div class="choose-btns">
            <button>预约挂号</button>
            <button>上门诊疗</button>
            <button>我的病历</button>
        </div>
        <div class="talk">
            <talk topnum="200" :isnow="false"></talk>
        </div>
    </div>
</template>
<script>
import Talk from 'base/talk/talk'
import DHeader from 'components/m-header/d-header'
export default {
    created(){
        document.title="历史咨询详情"
    },
    components:{
        Talk,
        DHeader
    }
}
</script>
<style lang="stylus" scoped>
.famdoc-box
    width 100% 
    box-sizing border-box
    .choose-btns
        width 100% 
        line-height 50px
        text-align center
        border-bottom 1px solid #eeeeee
</style>


