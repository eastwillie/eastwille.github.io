<template>
    <div id="home-page">
        {{$t(`message['This is i18n Example Text']`)}}
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
