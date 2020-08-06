<template>
    <div class="home">
        <span>欢迎使用，<p>现在是北京时间&nbsp;<b v-text="time"></b></p></span>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            time:''
        }
    },
    mounted() {
        this.getTime()
    },
    methods: {
        getTime(){
            let t = Date()
            t = t.replace('GMT+0800 (中国标准时间)','')
            this.time = t
        }
    },
}
</script>

<style lang="scss" scoped>
    .home{
        span{
            font-size: 50px;
            p{
                font-size: 40px;
                margin-top: 20px;
                b{
                    font-size: 34px;
                    font-weight: normal;
                }
            }
        }
    }
</style>