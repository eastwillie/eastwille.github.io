<template>
  <div id="solutions">
    <div class="industries">
      <industry
        :is-active="isActive(industries.financial)"
        title="Financial Services"
        :on-click="() => navigate(industries.financial)"
      />
      <industry
        :is-active="isActive(industries.oil)"
        title="Oil and Gas"
        :on-click="() => navigate(industries.oil)"
      />
      <industry
        :is-active="isActive(industries.education)"
        title="Education"
        :on-click="() => navigate(industries.education)"
      />
      <industry
        :is-active="isActive(industries.media)"
        title="Media and Entertainment"
        :on-click="() => navigate(industries.media)"
      />
      <industry
        :is-active="isActive(industries.healthcare)"
        title="Healthcare"
        :on-click="() => navigate(industries.healthcare)"
      />
    </div>
    <div class="content">
      <industry-content
        v-if="industries[industry] === industries.financial"
        title="Financial Services"
      >
        <template v-slot:problem>
          Current Issue
        </template>
        <template v-slot:solution>
          Fix
        </template>
        <template v-slot:pipeline>
          Services Diagram
        </template>
      </industry-content>
      <industry-content
        v-if="industries[industry] === industries.oil"
        title="Oil and Gas"
      >
        <template v-slot:problem>
          Current Issue
        </template>
        <template v-slot:solution>
          Fix
        </template>
        <template v-slot:pipeline>
          Services Diagram
        </template>
      </industry-content>
      <industry-content
        v-if="industries[industry] === industries.education"
        title="Education"
      >
        <template v-slot:problem>
          Current Issue
        </template>
        <template v-slot:solution>
          Fix
        </template>
        <template v-slot:pipeline>
          Services Diagram
        </template>
      </industry-content>
      <industry-content
        v-if="industries[industry] === industries.media"
        title="Media and Entertainment"
      >
        <template v-slot:problem>
          Current Issue
        </template>
        <template v-slot:solution>
          Fix
        </template>
        <template v-slot:pipeline>
          Services Diagram
        </template>
      </industry-content>
      <industry-content
        v-if="industries[industry] === industries.healthcare"
        title="Healthcare"
      >
        <template v-slot:problem>
          Current Issue
        </template>
        <template v-slot:solution>
          Fix
        </template>
        <template v-slot:pipeline>
          Services Diagram
        </template>
      </industry-content>
    </div>
  </div>
</template>

<script>
import Industry from '@/views/pages/Solutions/SolutionsPage/Industry.vue';
import IndustryContent from '@/views/pages/Solutions/SolutionsPage/IndustryContent.vue';

export default {
  components: {
    Industry,
    IndustryContent,
  },
  props: {
    industry: {
      type: String,
      required: true,
    },
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
  },
  methods: {
    navigate(industry) {
      if (this.industry === industry) return;

      if (!this.industries[industry]) return;

      this.$router.push(`/solutions/${industry}`);
    },
    isActive(industry) {
      return this.industries[this.industry] === industry;
    },
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
