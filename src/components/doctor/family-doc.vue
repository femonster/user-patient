<template>
    <div class="famdoc-box">
        <div class="f-header">
            <img src="https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000" alt="avatar">
            <div class="f-desc">
                <p>姓名：张五六</p>
                <p>科室：骨科</p>
                <p>所属医院：北京第一人民医院</p>
                <p>个人介绍：医学博士，15年临床经验</p>
                <button>续费</button>
            </div>
        </div>
        <div class="choose-btns">
            <button>预约挂号</button>
            <button>上门诊疗</button>
            <button>我的病历</button>
            <button>历史咨询</button>
        </div>
        <div class="talk">
            <talk topnum="200"></talk>
        </div>
    </div>
</template>
<script>
import Talk from 'base/talk/talk'
export default {
    created(){
        document.title="我的家庭医生"
    },
    components:{
        Talk
    }
}
</script>
<style lang="stylus" scoped>
.famdoc-box
    width 100% 
    box-sizing border-box
    padding 10px
    .f-header
        display flex
        align-items top 
        border-bottom 1px solid #eeeeee
        img 
            width 85px
            height 85px
            margin-right 10px
        .f-desc 
            font-size 14px
            line-height 1.6
            position relative
            button 
                position absolute
                top 0 
                right 0
    .choose-btns
        width 100% 
        line-height 50px
        text-align center
        border-bottom 1px solid #eeeeee
</style>


