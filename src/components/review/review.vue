<template>
    <div class="pl">
        <cube-rate v-model="value1"></cube-rate>
        <cube-textarea v-model="value2"></cube-textarea>
        <cube-button class="fbreview" @click="prev">发布评论</cube-button>
    </div>
</template>
<script>
export default {
    data() {
    return {
      value1: 3,
      value2:""
    }
  },
  methods:{
      prev(){
          this.$router.go(-1)
      }
  }
}
</script>
<style lang="stylus" scoped>
.pl
    box-sizing border-box
    padding 10px
    .cube-rate
        margin-bottom 20px
.fbreview
    position fixed
    bottom 0
    left 0
    width 100%
</style>


