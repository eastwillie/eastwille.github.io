<template>
    <div
        id="home-page"
        class="flex-column"
    >
        <div class="part-1 flex-column">
            <h4>{{ $t(`title['perception & cloud powered']`) }}</h4>
            <h2>{{ $t(`title['all-stack ai service platform']`) }}</h2>
            <h6>{{ $t(`title['empowering intelligent apps with our customizable ai technology']`) }}</h6>
        </div>
    </div>
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
        flex: 1;
        width: 100%;
        .part-1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            background: url(../../../assets/images/background/home_banner.png) ,linear-gradient(339.91deg, #33029B -2.33%, #1A124B 98.52%);

        }
    }
</style>
