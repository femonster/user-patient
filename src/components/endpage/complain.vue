<template>
    <div class="complain-box">
        <textarea v-show="!endcom" cols="30" rows="10" placeholder="对此次诊疗有何建议或意见，请写下来，我们会尽快给您答复">

        </textarea>
        <p v-show="endcom">您的建议或意见我们已经收到，我们会尽快联系您给您答复</p>
        <div class="eval-btns">
            <cube-button class="ok" @click="comend">{{this.endcom?`返回首页`:`确认`}}</cube-button>
            <cube-button class="cancel" v-show="!endcom" @click="toprev" :outline="true">返回</cube-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            endcom:false
        }
    },
    methods:{
        comend(){
            if(!this.endcom){
                this.endcom = !this.endcom;
            }else{
                this.$router.push("/");
            }
        },
        toprev(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="stylus" scoped>
.complain-box
    padding 10px
    box-sizing border-box
    textarea 
        width 100%
    p 
        line-height 2
    .eval-btns
        position fixed
        bottom 0
        left 0
        width 100%
        .ok 
            margin-bottom 10px
</style>


