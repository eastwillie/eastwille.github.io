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
      <solutions-card
        :src="svg.finanacel"
        icon-background-color="#521FD1"
        title="Financial Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
        read-more-link="#"
      />
      <solutions-card
        :src="svg.media"
        icon-background-color="#64DDEC"
        title="Media and Entertainment"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
        read-more-link="#"
      />
      <solutions-card
        :src="svg.health"
        icon-background-color="#3A71FF"
        title="Healthcare"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
        read-more-link="#"
      />
      <solutions-card
        :src="svg.education"
        icon-background-color="#AC46FF"
        title="Education"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
        read-more-link="#"
      />
    </div>
  </div>
</template>

<script>
import SolutionsCard from '@/views/pages/Solutions/SolutionsCard.vue';
import finanacel from '@/assets/images/icons/finanacel.svg';
import education from '@/assets/images/icons/education.svg';
import health from '@/assets/images/icons/health.svg';
import media from '@/assets/images/icons/media.svg';

export default {
  name: 'Solutions',
  components: { SolutionsCard },
  computed: {
    svg() {
      return {
        finanacel,
        education,
        health,
        media,
      };
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
    .cards{
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin: 0.6rem .84rem;
      column-gap: .24rem;
    }
  }
</style>
