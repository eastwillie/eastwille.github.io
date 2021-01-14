<template>
  <div class="solutions">
    <div class="header">
      <div class="container">
        <div class="content">
          <Divider class="divider" />
          <div class="title">
            {{ $t('solutions.title') }}
          </div>
          <div class="subtitle">
            {{ $t('solutions.subtitle') }}
          </div>
          <button class="btn-action cta">
            {{ $t(`button['request demo']`) }}
          </button>
        </div>
      </div>
    </div>
    <div class="container cards">
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
import Divider from '@/views/components/Divider/Index.vue';

export default {
  name: 'Solutions',
  components: {
    Divider,
    SolutionsCard,
  },
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
      height: 80vh;

      background: url('../../../assets/images/background/header-corner-top.svg') top left no-repeat, url('../../../assets/images/background/header-corner-bottom.svg') bottom right no-repeat, $background-header;
      color: $text-dark-bg;

      .divider {
        margin-bottom: 0.2rem;
      }

      .container {
        height: 100%;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        height: 100%;
        width: 100%;

        // TODO: rework this when we have responsive design
        background-image: url('../../../assets/images/background/solutions-header.svg');
        background-size: auto 90%;
        background-position: 90% center;
        background-repeat: no-repeat;
      }

      .title {
        @include typography-title;
        width: 40%;
        margin-bottom: 0.16rem;
      }

      .subtitle {
        @include typography-subtitle;
        width: 40%;
        margin-bottom: 0.48rem;
      }

      .cta {
        background: $background-primary;
      }
    }
  }
</style>
