<template>
    <div class="a-header">
        <router-link :to="`/person`"><i class="iconfont icon-shouye1"></i></router-link>
        <p><input placeholder="搜索医院，医生，科室，疾病"></p>
        <router-link :to="`/notice`"><i class="iconfont icon-shouye7"></i></router-link>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.a-header
    background-color #3db9bd
    display flex
    justify-content space-around
    margin-bottom 15px
    align-items center
    height 40px
    i
        color #ffffff
        font-size 18px
    input 
        padding 8px
        font-size 14px
</style>



