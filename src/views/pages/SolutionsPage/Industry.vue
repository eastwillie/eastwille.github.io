<template>
    <div class="industry">
        <div class="industry-icon"></div>
        <div class="industry-label">{{title}}</div>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
    },
};
</script>

<style lang="scss" scoped>
    .industry {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0.08rem 0.24rem;

        .industry-icon {
            width: 1rem;
            height: 1rem;
            background-color: #D3D3D3;
            border-radius: 1rem;
        }

        .industry-label {
            display: flex;
            flex-grow: 1;
            justify-content: center;
            padding-left: 0.16rem;
            text-align: center;
        }
    }
</style>
