<template>
    <div class="d-header">
        <div class="notice">
            <p class="notice-scroll"><marquee>今天是我的生日，来找我看病不花钱！</marquee></p>
            <cube-button :inline="true">公告</cube-button>
        </div>
    </div>
</template>
<script>
export default {
    created(){
        document.title = "医生详情"
    }
}
</script>
<style lang="stylus" scoped>
.d-header
    width 100% 
    display flex
    box-sizing border-box
    justify-content space-between
    padding 10px
    .notice-scroll
        width 80% 
</style>


