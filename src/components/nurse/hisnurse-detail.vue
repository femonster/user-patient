<template>
    <div class="nurse-history-box">
        <div class="n-header">
            <div class="n-desc">
                <p>姓名：张三</p>
                <p>年龄：25</p>
                <p>性别：男</p>
                <p>身份证号：142122129230434</p>
                <p>护理日期：2018/05/06</p>
                <p>护理号码：0001</p>
            </div>
            <div class="img-box">
                <img src="http://www.gengkai.site/assets/images/avatar.jpg" alt="avatar" class="avatar">
            </div>
        </div>    
        <div class="n-detail">
            <p>护理类型：皮下注射</p>
            <p>护理价格：200元</p>
            <p>护士姓名：李师师</p>
            <p>护理地址：北京市朝阳区将来路123号</p>
        </div>
    </div>    
</template>
<script>
export default {
    created(){
        document.title = "历史护理详情"
    }
}
</script>
<style lang="stylus" scoped>
.nurse-history-box
    width 100% 
    .n-header
        width 100% 
        display flex
        padding 10px
        box-sizing border-box
        justify-content space-between
        background-color #eeeeee
        .n-desc
            line-height 1.5
        .img-box 
            img 
               width 100px
    .n-detail
        width 100% 
        padding 10px
        line-height 1.5
        margin-top 10px
        box-sizing border-box
        background-color #eeeeee
</style>


