<template>
    <div class="reserve-box">
        <cube-form
        :model="model"
        :schema="schema"></cube-form>
        <cube-button class="pay-btn" @click="payfornurse">确定购买</cube-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            model: {
                username:"张三丰",
                time:"2018-07-06 13:00",
                user:"张无忌 身份证 14233********1",
                address:"将台路123号",
                price:"200元",
                type:"健康管理",
                phone:"18645232354"
            },
            schema:{
                fields:[
                    {
                        type: 'input',
                        modelKey: 'username',
                        label: '护士姓名',
                        props:{
                            disabled:true
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'time',
                        label: '预约时间',
                        props: {
                            options: ['2018-07-06 13:00','2018-07-06 13:30','2018-07-06 14:00','2018-07-06 14:30','2018-07-06 15:30']
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'user',
                        label: '护理对象',
                        props: {
                            options: ['张无忌 身份证 14233********1','张居正 身份证 14233********2','张活动 身份证 14223********1','张思维 身份证 14233********1']
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'address',
                        label: '护理地址',
                        props: {
                            options: ['将台路123号','朝阳区御锦华府','文水县']
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'price',
                        label: '护理价格',
                        props:{
                            disabled:true
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'type',
                        label: '护理类型',
                        props: {
                            options: ['健康管理','肌肉/皮下注射','婴幼儿护理','产后催乳']
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'phone',
                        label: '联系电话'
                    }
                ]
            }
        }
    },
    methods:{
        payfornurse(){
            this.$router.push({path:"/pay",query:{t:"n"}})
        }
    },
    created(){
        document.title="预约护理"
    }
}
</script>
<style lang="stylus" scoped>
.pay-btn
    width 100% 
    bottom 0
    left 0
    position fixed
</style>


