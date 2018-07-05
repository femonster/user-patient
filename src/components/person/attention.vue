<template>
    <div class="attention">
        <div class="nav-title">
            <p>医师</p>
            <p>护士</p>
        </div>
        <ul class="doc-attention">
            <li>
                <div class="img-box">
                    <img src="" alt="">
                    <span>张三</span>
                </div>
                <button>取消关注</button>
            </li>
        </ul>
        <ul class="nurse-attention">
            <li>
                <div class="img-box">
                    <img src="" alt="">
                    <span>张三</span>
                </div>
                <button>取消关注</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    created(){
        document.title = "我的关注"
    }
}
</script>
<style lang="stylus" scoped>
.attention
    width 100% 
</style>

