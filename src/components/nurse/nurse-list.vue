<template>
    <div class="nurse-doc-list">
        <scroll :data="doctorList" class="nurse-doc-scroll">
            <div>
                <div class="nurse-doc-item" v-for="(item,index) in doctorList" @click="toNurse(item.id)">
                    <div class="nurse-img-box">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="nurse-desc-box">
                        <p>姓名：{{item.name}}</p>
                        <p>好评率：{{item.good}}</p>
                        <p>年龄：{{item.age}}</p>
                        <p>护理年限：{{item.old}}</p>
                        <p>所属医院：{{item.hospital}}</p>
                        <p>费用：{{item.money}}</p>
                        <p>护理次数：{{item.times}}</p>
                        <button>购买</button>
                    </div>
                </div>
            </div>
        </scroll>
        <assistant></assistant>
    </div>
</template>
<script>
import Scroll from 'base/scroll/scroll'
import Assistant from 'base/assistant/assistant'
import {mock_nurse} from 'mock/mock_nurse'
export default {
    data(){
        return {
            doctorList:[],
            offsetH:0
        }
    },
    created(){
        this.doctorList = mock_nurse
        document.title = "护理人员列表"
    },
    methods:{
        toNurse(id){
            this.$router.push({ path: `/nurse/${id}`, query: { t: this.$route.query.t }})
        }
    },
    components:{
        Scroll,
        Assistant
    }
}
</script>
<style lang="stylus" scoped>
.nurse-doc-list
    width 100% 
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    box-sizing border-box
    padding 10px
    font-size 14px
    .nurse-doc-scroll
        width 100%
        height 100%
        overflow hidden
        .nurse-doc-item
            width 100%
            display flex
            padding 10px
            box-sizing border-box
            justify-content flex-start
            border 1px solid #eeeeee
            margin-bottom 10px
            border-radius 5px 
            position relative
            img 
                width 80px
                margin-right 10px
            .nurse-desc-box
                line-height 1.5              
        
</style>


