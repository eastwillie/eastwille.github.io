<template>
  <div class="solutions">
    <div class="header">
      Industry solutions
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua..
      </div>
      <div>request demo</div>
    </div>
    <div class="cards">
      <SolutionsCard
        v-for="card in cards"
        :key="card.name"
        :name="card.name"
      />
    </div>
  </div>
</template>

<script>
import SolutionsCard from '@/views/pages/Solutions/SolutionsCard.vue';

export default {
  name: 'Solutions',
  components: { SolutionsCard },
  computed: {
    cards() {
      return [
        {
          name: this.$t('solutions["financial services"]'),
        },
        {
          name: this.$t('solutions["media and entertainment"]'),
        },
        {
          name: this.$t('solutions["healthcare"]'),
        },
        {
          name: this.$t('solutions["education"]'),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  .solutions {
    .header {
      background: $background-header;
      color: $text-white;
    }
  }
</style>
