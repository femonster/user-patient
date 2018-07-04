<template>
    <div class="doctor-box">
        <d-header></d-header>
    </div>    
</template>
<script>
import DHeader from 'components/m-header/d-header'
export default {
    data(){
        return {

        }
    },
    created(){
        document.title = "医生详情"
    },
    components:{
        DHeader
    },
    methods:{

    }
}
</script>
<style lang="stylus" scoped>

</style>


