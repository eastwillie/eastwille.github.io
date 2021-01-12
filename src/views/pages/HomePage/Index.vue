<template>
    <div id="home-page" />
</template>
<script>
export default {
    mounted() {
        this.$methods.methodsExample();
    },
};
</script>
<style lang="scss" scoped>
    #home-page {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: url(../../../assets/images/background/home_banner.png) linear-gradient(339.91deg, #33029B -2.33%, #1A124B 98.52%);
    }
</style>
