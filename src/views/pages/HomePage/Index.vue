<template>
    <div id="home-page">
        {{ $t(`message['This is i18n Example Text']`) }}
        <el-button>Element UI Button</el-button>
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

    }
</style>
