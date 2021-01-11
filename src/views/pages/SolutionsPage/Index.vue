<template>
    <div id="solutions">
        <div class="industries">
            <industry title="Financial Services" :onClick="() => navigate(industries.financial)" />
            <industry title="Oil and Gas" :onClick="() => navigate(industries.oil)" />
            <industry title="Education" :onClick="() => navigate(industries.education)" />
            <industry title="Media and Entertainment" :onClick="() => navigate(industries.media)" />
            <industry title="Healthcare" :onClick="() => navigate(industries.healthcare)" />
        </div>
        <div class="content">
            <div v-if="industries[industry] === industries.financial">Financial Services</div>
            <div v-if="industries[industry] === industries.oil">Oil and Gas</div>
            <div v-if="industries[industry] === industries.education">Education</div>
            <div v-if="industries[industry] === industries.media">Media and Entertainment</div>
            <div v-if="industries[industry] === industries.healthcare">Healthcare</div>
        </div>
    </div>
</template>

<script>
import Industry from '@/views/pages/SolutionsPage/Industry.vue';

export default {
    components: {
        Industry,
    },
    computed: {
        industries() {
            return {
                financial: 'financial',
                oil: 'oil',
                education: 'education',
                media: 'media',
                healthcare: 'healthcare',
            };
        },
        industry() {
            return this.$route.params.industry;
        },
    },
    methods: {
        navigate(industry) {
            if (this.industry === industry) return;

            this.$router.push(`/solutions/${industry}`);
        },
    },
    mounted() {
        if (!this.industry) this.$router.push('/solutions/financial');
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
            min-width: 15%;
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
