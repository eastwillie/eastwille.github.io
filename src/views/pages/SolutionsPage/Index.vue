<template>
    <div id="solutions">
        <div class="industries">
            <industry title="Financial Services" />
            <industry title="Oil and Gas" />
            <industry title="Education" />
            <industry title="Media and Entertainment" />
            <industry title="Healthcare" />
        </div>
        <div class="content">Content</div>
    </div>
</template>

<script>
import Industry from './Industry.vue';

export default {
    components: {
        Industry,
    },
};
</script>

<style lang="scss" scoped>
    #solutions {
        display: flex;
        flex-grow: 1;

        .industries {
            display: flex;
            flex-direction: column;
            width: 15%;
            padding: 0.16rem 0;
            border-right: 1px solid #D3D3D3;
        }

        .content {
            display: flex;
            flex-grow: 1;
            padding: 0.16rem;
        }
    }
</style>
