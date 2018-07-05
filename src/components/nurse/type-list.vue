<template>
    <div class="type-list">
        <div class="type-item" v-for="(item,index) in typesdata" @click="checktype(index)">
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            typesdata:[
                {
                    title:"肌肉/皮下注射",
                    desc:"遵医嘱采用轻柔手法皮下或肌肉注射药物（如胰岛素、黄体酮等"
                },{
                    title:"婴幼儿护理",
                    desc:"婴幼儿的常规评估、协助洗浴、身体抚触、被动操活动、以及脐部残端、眼部、口腔、臀部等部位的皮肤护理"
                },{
                    title:"产后催乳",
                    desc:"通过柔和手法进行穴位经络按摩，疏通经络和乳腺管，促进泌乳和排乳，帮助产后妈妈消除无奶少奶，胀痛、淤积、乳腺堵塞等困扰"
                },{
                    title:"尿管护理",
                    desc:"留置导尿（插尿管）、给予留置尿管后的膀胱功能训练和居家护理指导，预防尿路感染等并发症"
                },{
                    title:"健康管理",
                    desc:"协助测量和记录血压、血糖等生命体征，整理家庭药箱，给与饮食、生活、运动指导和并发症的预防指导"
                }
            ]
        }
    },
    created(){
        document.title="护理类别列表"
    },
    methods:{
        checktype(index){
            this.$router.push({ path: `/nurselist`, query: { t: index }})
        }
    }   
}
</script>
<style lang="stylus" scoped>
.type-list
    width 100%
    box-sizing border-box
    padding 10px
    .type-item
        width 100% 
        line-height 2
        box-sizing border-box
        padding 10px
        border 1px solid #eeeeee
        margin-bottom 10px
        h3 
            font-weight bold 

</style>


