<template>
    <div class="home-doc-list">
        <scroll :data="doctorList" class="home-doc-scroll">
            <div>
                <div class="home-doc-item" v-for="(item,index) in doctorList" @click="toDoc(item.id)">
                    <div class="home-img-box">
                        <img :src="item.avatar" alt="">
                        <p>咨询人数</p>
                        <p>345345次</p>
                    </div>
                    <div class="home-desc-box">
                        <p>医师姓名：{{item.name}}</p>
                        <p>所属科室：{{item.department}}</p>
                        <p>医师职称：{{item.office}}</p>
                        <p>所属医院：{{item.hospital}}</p>
                        <p>个人介绍：{{item.desc}}</p>
                        <button>￥10元/次 购买</button>
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
import {mock_doctor} from 'mock/mock_doctor'
export default {
    data(){
        return {
            doctorList:[],
            offsetH:0
        }
    },
    created(){
        this.doctorList = mock_doctor
        document.title = "图文咨询列表"
    },
    methods:{
        toDoc(id){
            this.$router.push(`/doctor/${id}`)
        }
    },
    components:{
        Scroll,
        Assistant
    }
}
</script>
<style lang="stylus" scoped>
.home-doc-list
    width 100% 
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    box-sizing border-box
    padding 10px
    font-size 14px
    .home-doc-scroll
        width 100%
        height 100%
        overflow hidden
        .home-doc-item
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
            .home-desc-box
                line-height 1.5
                button 
                    position absolute
                    top 10px
                    right 5px                
        
</style>


