<template>
    <div class="reserve-box">
        <cube-form
        :model="model"
        :schema="schema">
        <cube-form-item :field="schema.fields[0]"></cube-form-item>
        <cube-form-item :field="schema.fields[1]"></cube-form-item>
        <cube-form-item :field="schema.fields[2]"></cube-form-item>
        <cube-form-item :field="schema.fields[3]"></cube-form-item>
        <cube-form-item :field="schema.fields[4]">
            <div class="select-box" style="display:flex;align-items:center;">
                <cube-select
                v-model="model.user"
                :options="schema.fields[4].props.options">
                </cube-select>
                <a href="javascript:;" @click="addPeople">添加</a>
            </div>
           
        </cube-form-item>
        <cube-form-item :field="schema.fields[5]" v-show="showSelect"></cube-form-item>
        <cube-form-item :field="schema.fields[6]"></cube-form-item>
        <cube-form-item :field="schema.fields[7]"></cube-form-item>
        <cube-form-item :field="schema.fields[8]"></cube-form-item>
        </cube-form>
        <router-link :to="`pay`" class="pay-btn" tag="button">确定购买</router-link>
        <div class="modal" v-show="ismodal">
            <div class="add-box">
                <cube-input :placeholder="`姓名`"></cube-input>
                <cube-input :placeholder="`年龄`"></cube-input>
                <cube-input :placeholder="`性别`"></cube-input>
                <cube-input :placeholder="`手机号`"></cube-input>
                <cube-input :placeholder="`身份证号`"></cube-input>
                <cube-textarea :placeholder="`既往病史`"></cube-textarea>
                <cube-button class="add-btn sub-btn">确定</cube-button>
                <cube-button  :outline="true" class="add-btn cancel-btn" @click="ismodal=false">取消</cube-button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ismodal:false,
            showSelect:false,
            model: {
                username:"张三丰",
                docaddress:"北京市丰台区莲花乡xx村",
                time:"2018-07-06 13:00",
                user:"张无忌 身份证 14233********1",
                address:"将台路123号",
                price:"200元",
                phone:"18645232354",
                progress:"首诊",
                methods:"门诊"
            },
            schema:{
                fields:[
                    {
                        type: 'input',
                        modelKey: 'username',
                        label: '医师姓名',
                        props:{
                            disabled:true
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'docaddress',
                        label: '医师地址',
                        props:{
                            disabled:true
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'time',
                        label: '预约时间',
                        props: {
                            options: ['2018-07-03 周二 下午','2018-07-05 周四 上午','2018-07-06 周五 下午']
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'methods',
                        label: '服务方式',
                        props: {
                            options: ['门诊','上门']
                        },
                        events:{
                            'change':(...args)=>{
                                if(args[0]==="门诊"){
                                    this.showSelect = false
                                }else{
                                    this.showSelect = true
                                }
                            }
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'user',
                        label: '服务对象',
                        props: {
                            options: ['张无忌 身份证 14233********1','张居正 身份证 14233********2','张活动 身份证 14223********1','张思维 身份证 14233********1']
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'address',
                        label: '服务地址',
                        props: {
                            options: ['将台路123号','朝阳区御锦华府','文水县']
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'price',
                        label: '服务价格',
                        props:{
                            disabled:true
                        }
                    },
                    {
                        type: 'select',
                        modelKey: 'progress',
                        label: '诊断进程',
                        props: {
                            options: ['首诊','复诊']
                        }
                    },
                    {
                        type: 'input',
                        modelKey: 'phone',
                        label: '用户电话'
                    }
                ]
            }
        }
    },
    methods:{
        ghpay(){
            this.$route.push("/pay")
        },
        addPeople(){
            this.ismodal = true
        }
    },
    created(){
        document.title="预约挂号/上门诊疗"
    }
}
</script>
<style lang="stylus" scoped>
.pay-btn
    width 100% 
    bottom 0
    left 0
    position fixed
    padding 10px
.modal
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba(0,0,0,0.4)
    .add-box
        width 80%
        height 500px
        margin 50px auto 0
        background-color #ffffff
        box-sizing border-box
        padding 10px
        position relative
        div
            margin 10px 0
        .add-btn
            width 50% 
            position absolute
            bottom 0
        .sub-btn 
            left 0    
        .cancel-btn
            right 0
</style>


