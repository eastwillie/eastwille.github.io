<template>
    <div
        :class="{active: isActive}"
        @click="onClick"
    >
        <div class="industry-icon" />
        <div class="industry-label">
            {{ $t(`industries['${title}']`) }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isActive: Boolean,
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            required: true,
        },
        onClick: {
            type: Function,
            default: () => {},
        },
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
            min-width: 1rem;
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

        &:hover {
            background-color: #FAFAFA;
            cursor: pointer;
        }

        &.active {
            background-color: #FAFAFA;
        }
    }
</style>
