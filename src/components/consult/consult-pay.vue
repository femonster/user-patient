<template>
    <div class="conpay-box">
        <d-header :isnotice="false" :ispj="false"></d-header>
        <div class="c-btns">
            <router-link :to="`reservedoc`" tag="button">预约挂号</router-link>
            <router-link :to="`reservedoc`" tag="button">上门诊疗</router-link>
        </div>
        <div class="c-inp">
            <label>当前患者：</label>
            <select name="" id="">
                <option value="1">张33 34岁 14033330202033</option>
                <option value="2">张地方 34岁 14033330202033</option>
                <option value="3">张就 34岁 14033330202033</option>
            </select>
            <br><br>
            <label>完善既往病史：</label>   
            <router-link :to="`/history`">前去完善</router-link>
            <br><br>
            <label>病情描述：</label>   
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br><br>
            <label>检查报告：</label>
            <input type="file" name="" id="">
        </div>
        <router-link :to="`connow`" tag="cube-button">开始咨询</router-link>
        
    </div>
</template>
<script>
import DHeader from 'components/m-header/d-header'
export default {
    created(){
        document.title = "图文咨询"
    },
    components:{
        DHeader
    }
}
</script>
<style lang="stylus" scoped>
.c-btns
    background-color #eeeeee
    margin-top 10px
    padding 10px
    box-sizing border-box
.c-inp
    background-color #eeeeee
    margin-top 10px
    padding 10px
    box-sizing border-box
.consult-btn
    position fixed
    bottom 0
    left 0
</style>

