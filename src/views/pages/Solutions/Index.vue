<template>
  <div id="solutions-page">
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
      <el-row :gutter="24">
        <el-col
          v-for="(solutionsCard, index) in solutionsCards"
          :key="index"
          :xs="24"
          :md="12"
          :lg="6"
        >
          <solutions-card v-bind="solutionsCard" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SolutionsCard from '@/views/pages/Solutions/SolutionsCard.vue';
import Divider from '@/components/Divider/Index.vue';
import Financial from '@/assets/images/icons/financial.svg';
import education from '@/assets/images/icons/education.svg';
import health from '@/assets/images/icons/health.svg';
import media from '@/assets/images/icons/media.svg';

export default {
  name: 'Solutions',
  components: {
    Divider,
    SolutionsCard,
  },
  data() {
    return {
      solutionsCards: [
        {
          src: Financial,
          className: 'card-financial',
          title: this.$t("solutions['financial services']"),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
        },
        {
          src: media,
          className: 'card-media',
          title: this.$t("solutions['media and entertainment']"),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
        },
        {
          src: health,
          className: 'card-health',
          title: this.$t('solutions.healthcare'),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
        },
        {
          src: education,
          className: 'card-education',
          title: this.$t('solutions.education'),
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
          readMoreLink: '#',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#solutions-page {
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
    padding: 0.6rem 0.84rem 1.26rem 0.84rem;

    /deep/ .card {
      &-financial {
        background-color: #521fd1;
        box-shadow: 4px 7px 17px rgba(82, 31, 209, 0.32);
      }
      &-media {
        background-color: #64ddec;
        box-shadow: 4px 7px 17px rgba(100, 221, 236, 0.42);
      }
      &-health {
        background-color: #3a71ff;
        box-shadow: 4px 7px 17px rgba(58, 113, 255, 0.42);
      }
      &-education {
        background-color: #ac46ff;
        box-shadow: 4px 7px 17px rgba(172, 70, 255, 0.42);
      }
    }
  }
}
</style>
