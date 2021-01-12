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
            <industry-content v-if="industries[industry] === industries.financial" title="Financial Services">
                <template v-slot:problem>Current Issue</template>
                <template v-slot:solution>Fix</template>
                <template v-slot:pipeline>Services Diagram</template>
            </industry-content>
            <industry-content v-if="industries[industry] === industries.oil" title="Oil and Gas">
                <template v-slot:problem>Current Issue</template>
                <template v-slot:solution>Fix</template>
                <template v-slot:pipeline>Services Diagram</template>
            </industry-content>
            <industry-content v-if="industries[industry] === industries.education" title="Education">
                <template v-slot:problem>Current Issue</template>
                <template v-slot:solution>Fix</template>
                <template v-slot:pipeline>Services Diagram</template>
            </industry-content>
            <industry-content v-if="industries[industry] === industries.media" title="Media and Entertainment">
                <template v-slot:problem>Current Issue</template>
                <template v-slot:solution>Fix</template>
                <template v-slot:pipeline>Services Diagram</template>
            </industry-content>
            <industry-content v-if="industries[industry] === industries.healthcare" title="Healthcare">
                <template v-slot:problem>Current Issue</template>
                <template v-slot:solution>Fix</template>
                <template v-slot:pipeline>Services Diagram</template>
            </industry-content>
        </div>
    </div>
</template>

<script>
import Industry from '@/views/pages/SolutionsPage/Industry.vue';
import IndustryContent from '@/views/pages/SolutionsPage/IndustryContent.vue';

export default {
    components: {
        Industry,
        IndustryContent,
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

            if (!this.industries[industry]) return;

            this.$router.push(`/solutions/${industry}`);
        },
    },
    mounted() {
        if (!this.industry) this.navigate(this.industries.financial);
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
