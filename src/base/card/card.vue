<template>
    <!--卡片组件 -->
    <div class="todo-card">
        <template v-if="cardType==1">
            <div class="todo-l">
                <p>预约时间：{{cardData.time}}</p>
                <p>预约地点：{{cardData.address}}</p>
                <p>问诊方式：{{cardData.method==1?"门诊":"上门"}}</p>
                <p>预约号码：{{cardData.number}}</p>
                <p>问诊进程：{{cardData.process==1?"首诊":"复诊"}}</p>
                <template v-if="cardData.status==0">
                    <cube-button :inline="true" @click="houzhen">候诊</cube-button>
                </template>
                <template v-else-if="cardData.status==-1">
                   <p style="color:red;">已过期</p>
                </template>
                <template v-else-if="cardData.status==1">
                   <p style="color:green;">正在候诊</p>
                </template>
                <template v-else-if="cardData.status==2">
                   <p style="color:green;">正在诊断</p>
                </template>
                <template v-else-if="cardData.status==3">
                   <cube-button :inline="true" @click="pingjia">评价</cube-button>
                </template>
                <template v-else-if="cardData.status==4">
                   <p style="color:gray;">已完成</p>
                </template>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
                <p style="text-align:center;padding-top:10px">{{cardData.uname}} 医师</p>
            </div>
            <div class="todo-status">{{cardData.method==1?"门诊":"上门"}}</div>
        </template>
        <template v-else-if="cardType==2">

        </template>
        <template v-else-if="cardType==3">
            <div class="todo-l">
                <p>{{cardData.time}}</p>
                <p>{{cardData.notice}}</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
        <template v-else-if="cardType==4">
            <div class="todo-l">
                <p>{{cardData.time}}</p>
                <p>{{cardData.history}}</p>
                <p>病历号：{{cardData.hid}}</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
        <template v-else-if="cardType==5">
            <div class="todo-l">
                <p>{{cardData.time}}</p>
                <p>{{cardData.history}}</p>
                <p>处方号：{{cardData.hid}}</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
        <template v-else-if="cardType==6">
            <div class="todo-l">
                <p>咨询时间：{{cardData.time}}</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
        <template v-else-if="cardType==7">
            <div class="todo-l">
                <p>护理时间：{{cardData.time}}</p>
                <p>护理人员：李师师护士</p>
            </div>
            <div class="todo-r">
                <div class="todo-bg" :style="`background-image:url(${cardData.avatar})`"></div>
            </div>
        </template>
    </div>
</template>
<script>
// cardType 1 医生首页列表 2 护士首页列表 3 公告列表 4 病历列表 5 收益列表 6 咨询列表 7 历史护理列表
export default {
    props:{
        cardType:{
            type:[String, Number],
            default:1
        },
        cardData:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    methods:{
            houzhen(){
                this.$createToast({
                    txt: '我们将会通知医生您已到达',
                    type: 'correct'
                }).show()
            },
            pingjia(){
                
            }
        }
}
</script>
<style lang="stylus" scoped>
.todo-card
    width calc(100% - 100px)
    box-sizing border-box
    border 1px solid #333333
    position relative
    display flex
    padding 10px 15px
    justify-content space-around
    .todo-l
        font-size 14px
        line-height 1.5
    .todo-r
        .todo-bg 
            width 90px
            height 90px
            background-position center
            background-size cover
            background-repeat no-repeat
    .todo-status
        width 30px
        height 30px
        font-size: 12px
        border-radius 50%
        line-height 30px
        position absolute
        top 45px
        left -15px
        text-align center
        background-color green 
        color #ffffff
</style>


