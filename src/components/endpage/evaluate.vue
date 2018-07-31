<template>
    <div class="eval-box">
        <ul v-show="!evalend">
            <li>医师姓名: 张三</li>
            <li>评价类型：预约诊疗</li>
            <li>疗效：<cube-rate v-model="lx"></cube-rate></li>
            <li>满意度：<cube-rate v-model="my"></cube-rate></li>
            <li>评论：<cube-textarea></cube-textarea></li>
        </ul>
        <div class="eval-end" v-show="evalend">
            评价成功！
        </div>
        <div class="eval-btns">
            <cube-button class="ok" @click="toend">{{this.evalend?`返回首页`:`确认`}}</cube-button>
            <cube-button class="cancel" @click="prev" :outline="true" v-show="!evalend">返回</cube-button>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            lx:0,
            my:0,
            evalend:false
        }
    },
    methods:{
        toend(){
            if(!this.evalend){
                this.evalend = !this.evalend;
            }else{
                this.$router.push("/");
            }
        },
        prev(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="stylus" scoped>
.eval-box 
    box-sizing border-box
    padding 10px
    li 
        padding 10px 0
    .eval-btns
        position fixed
        bottom 0
        left 0
        width 100%
        .ok 
            margin-bottom 10px
</style>


