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
    <div class="container cards" >
      <solutions-card
        v-for="(solutionsCard, index) in solutionsCards"
        v-bind:key="index"
        :src="solutionsCard.src"
        :icon-background-color="solutionsCard.iconBackgroundColor"
        :iconShadowColor="solutionsCard.iconShadowColor"
        :title="solutionsCard.title"
        :description="solutionsCard.description"
        :read-more-link="solutionsCard.readMoreLink"
      />
    </div>
  </div>
</template>

<script>
import SolutionsCard from '@/views/pages/Solutions/SolutionsCard.vue';
import Divider from '@/views/components/Divider/Index.vue';
import finanacel from '@/assets/images/icons/finanacel.svg';
import education from '@/assets/images/icons/education.svg';
import health from '@/assets/images/icons/health.svg';
import media from '@/assets/images/icons/media.svg';

export default {
  name: 'Solutions',
  components: {
    Divider,
    SolutionsCard,
  },
  computed: {
    solutionsCards() {
      return [
        {
          src: finanacel,
          iconBackgroundColor: '#521FD1',
          iconShadowColor: '4px 7px 17px rgba(82, 31, 209, 0.32)',
          title: this.$t("solutions['financial services']"),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
        },
        {
          src: media,
          iconBackgroundColor: '#64DDEC',
          iconShadowColor: '4px 7px 17px rgba(100, 221, 236, 0.42)',
          title: this.$t("solutions['media and entertainment']"),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
        },
        {
          src: health,
          iconBackgroundColor: '#3A71FF',
          iconShadowColor: '4px 7px 17px rgba(58, 113, 255, 0.42)',
          title: this.$t('solutions.healthcare'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
        },
        {
          src: education,
          iconBackgroundColor: '#AC46FF',
          iconShadowColor: '4px 7px 17px rgba(172, 70, 255, 0.42)',
          title: this.$t('solutions.education'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
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
    .cards {
      display: grid;
      background: $background-gray;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      padding: 0.6rem .84rem 1.26rem .84rem;
      column-gap: .24rem;
    }
  }
</style>
