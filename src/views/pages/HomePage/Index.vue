<template>
  <div id="home-page">
    <div class="panel rodin">
      <div class="content">
        <div class="labels-container">
          <span class="perception">{{ $t(`title['perception & cloud powered']`) }}</span>
          <span class="all-stack">{{ $t(`title['all-stack ai service platform']`) }}</span>
          <span class="empowering">{{ $t(`title['empowering intelligent apps with our customizable AI technology']`) }}</span>
        </div>
        <div class="rodin-actions">
          <button class="btn-action demo">
            {{ $t(`button['request demo']`) }}
          </button>
          <button class="btn-action check">
            {{ $t(`button['check our services']`) }}
          </button>
        </div>
        <div class="rodin-stats">
          <div class="stat">
            <span class="count">50+</span>
            <span class="count-description">{{ $t(`description['AI Services Covering']`) }}</span>
          </div>
          <div class="stat">
            <span class="count">5</span>
            <span class="count-description">{{ $t(`description['Major AI Domains']`) }}</span>
          </div>
        </div>
      </div>
      <img
        class="illustration"
        src="@/assets/images/background/illustration.svg"
        alt="AI Service Illustration"
      >
    </div>
    <div class="vision content panel">
      <div class="introduction">
        <div class="introduction-heading">
          <img
            src="@/assets/images/quote.svg"
            alt=""
          > {{ $t(`title['Introduction to Rodin']`) }}
        </div>
        <div class="introduction-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
      <div class="our-vision">
        <span class="tagline">{{ $t(`title["World's First All-Stake One-Stop AI Service Platform"]`) }}</span>
        <span class="our-vision-heading">{{ $t(`title['Our Vision']`) }}</span>
        <span class="our-vision-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        <span class="our-vision-description">Vivamus arcu felis bibendum ut tristique et egestas. Pellentesque nec nam aliquam sem et tortor consequat id. Porttitor rhoncus dolor purus non enim. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.</span>
        <span class="our-vision-description">Elit ut aliquam purus sit amet luctus venenatis. Amet porttitor eget dolor morbi non arcu. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Pellentesque elit eget gravida cum sociis. Tellus mauris a diam maecenas sed enim ut sem viverra.</span>
      </div>
      <img
        class="our-vision-banner"
        src="@/assets/images/background/our-vision.svg"
        alt="Our Vision Globe"
      >
    </div>
    <div class="why content">
      <div class="why-information">
        <span class="why-heading">{{ $t(`title['Why choose us?']`) }}</span>
        <span class="why-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <button class="btn-action why-demo">
        {{ $t(`button['request demo']`) }}
      </button>
      <img
        class="data-lines"
        src="@/assets/images/background/data-lines.svg"
        alt="Data Lines"
      >
    </div>
    <div class="what content panel">
      <img
        class="diagonal-box"
        src="@/assets/images/background/diagonal-box.svg"
        alt="Diagonal Box"
      >
      <span class="what-heading">{{ $t(`title['What Can You Get with Rodin?']`) }}</span>
      <div class="services">
        <el-row>
          <el-col
            v-for="(item, index) in advantageCards"
            :key="index"
            :xs="24"
            :md="12"
            :lg="6"
          >
            <div
              :class="item.className"
              class="service"
            >
              <img
                :src="item.image"
                :alt="item.className"
              >
              <span class="service-heading">{{ item.headMsg }}</span>
              <span class="service-description">{{ item.firstDescription }}</span>
              <span class="service-description">{{ item.secondDescription }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="ai-services">
        <span class="ai-services-heading">{{ $t(`title['Our AI Services']`) }}</span>
        <span class="ai-services-description">{{ $t(`description['All in One AI Platform-as-a-Service for Vast Businesses and Developers']`) }}</span>
        <div class="defined-services">
          <el-row :gutter="20">
            <el-col
              v-for="(item, index) in servicesCards"
              :key="index"
              :xs="24"
              :md="12"
              :lg="12"
              :xl="6"
            >
              <service-card v-bind="item" />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImageBrain from '@/assets/images/icons/brain-api.svg';
import ImageDeployment from '@/assets/images/icons/deployment.svg';
import ImageMarketplace from '@/assets/images/icons/marketplace.svg';
import ImagePipeline from '@/assets/images/icons/pipeline.svg';
import ImageNLP from '@/assets/images/icons/NLP.svg';
import ImageAIU from '@/assets/images/icons/AIU.svg';
import ImageASA from '@/assets/images/icons/ASA.svg';
import ImageVCA from '@/assets/images/icons/VCA.svg';
import ServiceCard from './ServiceCard/Index.vue';

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      servicesCards: [
        {
          src: ImageNLP,
          className: 'card-nlp',
          title: this.$t('title[\'Natural Language Processing\']'),
          description: this.$t('description[\'Empowering your advanced NLP based applications with simple API calls.\']'),
          readMoreLink: '#',
        },
        {
          src: ImageVCA,
          className: 'card-vca',
          title: this.$t('title[\'Video Content Analysis\']'),
          description: this.$t('description[\'Unlocking video content analysis capabilities based on cutting-edge deep learning models.\']'),
          readMoreLink: '#',
        },
        {
          src: ImageAIU,
          className: 'card-aiu',
          title: this.$t('title[\'Automatic Image Understanding\']'),
          description: this.$t('description[\'Giving the ability of processing massive images into your able hands.\']'),
          readMoreLink: '#',
        },
        {
          src: ImageASA,
          className: 'card-asa',
          title: this.$t('title[\'Audio and Speech Analysis\']'),
          description: this.$t('description[\'Enabling your application both can hear and speak, as smart as it should be.\']'),
          readMoreLink: '#',
        },
      ],
      advantageCards: [
        {
          className: 'api',
          image: ImageBrain,
          headMsg: this.$t('title[\'AI Services APIs\']'),
          firstDescription: this.$t('longText[\'It is long established fact\']'),
          secondDescription: this.$t('longText[\'The point of using lorem ipsum\']'),
        },
        {
          className: 'pipeline',
          image: ImagePipeline,
          headMsg: this.$t('title[\'AI Customized Pipeline Builder\']'),
          firstDescription: this.$t('longText[\'It is long established fact\']'),
          secondDescription: this.$t('longText[\'The point of using lorem ipsum\']'),
        },
        {
          className: 'deployment',
          image: ImageDeployment,
          headMsg: this.$t('title[\'Customized Deployment\']'),
          firstDescription: this.$t('longText[\'It is long established fact\']'),
          secondDescription: this.$t('longText[\'The point of using lorem ipsum\']'),
        },
        {
          className: 'marketplace',
          image: ImageMarketplace,
          headMsg: this.$t('title[\'Marketplace\']'),
          firstDescription: this.$t('longText[\'It is long established fact\']'),
          secondDescription: this.$t('longText[\'The point of using lorem ipsum\']'),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#home-page {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  background: #F7F8FF;
  color: #3A3955;

  .panel {
    display: flex;
    position: relative;
    width: 100vw;
    min-height: 100vh;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 0 0.85rem;
  }

  .rodin {
    position: relative;
    flex-direction: row;
    height: calc(100vh - 61px); // had to use px - due to Element UI's component used px
    min-height: calc(100vh - 61px); // had to use px - due to Element UI's component used px
    padding-top: 2.4rem;
    background: linear-gradient(339.91deg, #33029B -2.33%, #1A124B 98.52%);
    color: white;

    .illustration {
      z-index: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 95%;
    }

    .labels-container {
      z-index: 1;
      display: flex;
      flex-direction: column;

      .perception {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.24rem;
        line-height: 0.30rem;
      }

      .all-stack {
        margin-top: 0.12rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.36rem;
      }

      .empowering {
        margin-top: 0.12rem;
        font-size: 0.18rem;
        font-weight: 300;
      }
    }

    .rodin-actions {
      z-index: 1;
      display: flex;
      gap: 0.16rem;
      margin-top: 0.4rem;

      .demo {
        background: $background-primary;
      }

      .check {
        background: transparent;
        border: 0.5px solid #FFFFFF;
        box-sizing: border-box;
      }
    }
  }

  .brain {
    position: absolute;
    width: 321.5px;
    height: 273px;
    left: 907px;
    top: 94px;
    background: linear-gradient(0deg, rgba(156, 124, 249, 0.44) -13.55%, rgba(36, 12, 106, 0) 100%);
  }

  .rodin-stats {
    display: flex;
    margin-top: 0.4rem;

    .stat {
      display: flex;
      flex-direction: column;
      border-left: 1px solid white;
      padding-left: 0.2rem;
      margin-right: 0.24rem;

      .count {
        font-size: 0.32rem;
        font-weight: 700;
      }

      .count-description {
        font-size: 0.20rem;
        font-weight: 300;
      }
    }
  }

  .introduction {
    width: 100%;
    margin-top: -0.6rem;
    background-color: white;
    border-radius: 0.06rem 0.06rem 0 0;
    padding: 0.30rem 0.36rem 0.45rem;
    border-bottom: 1px solid #3B72FF;

    .introduction-heading {
      font-size: 0.28rem;
      font-weight: 700;
    }

    .introduction-description {
      margin-top: 0.24rem;
      font-size: 0.16rem;
      color: #605F74;
    }
  }

  .vision {
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;

    .our-vision {
      z-index: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 60%;
      margin-top: 0.8rem;

      .tagline {
        position: relative;
        margin-right: auto;
        padding: 0.08rem 0.48rem 0.08rem 0.2rem;
        border-radius: 0.32rem 1rem 1rem 0.32rem;
        font-size: 0.16rem;
        font-weight: 600;
        background: rgba(44, 7, 132, 0.1);

        &::after {
          content: '';
          position: absolute;
          top: 0.08rem;
          left: 0.1rem;
          height: 60%;
          width: 2px;
          background: #2C0784;
          border-radius: 6px;
        }
      }

      .our-vision-heading {
        margin-top: 0.20rem;
        font-size: 0.32rem;
        font-weight: 800;
      }

      .our-vision-sub-heading {
        margin-top: 0.20rem;
        font-size: 0.14rem;
        font-weight: 700;
        color: #605F74;
      }

      .our-vision-description {
        margin-top: 0.20rem;
        font-size: 0.14rem;
        color: #605F74;
      }
    }

    .our-vision-banner {
      z-index: 0;
      position: absolute;
      top: 2rem;
      right: 0.4rem;
      height: 60%;
    }
  }

  .why {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 1.64rem;
    width: 100vw;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    color: white;
    background: linear-gradient(276.75deg, #33029B 1.11%, #1A124B 85.2%);

    .why-demo {
      z-index: 1;
      background: linear-gradient(100.62deg, #3A71FF 48.27%, rgba(121, 58, 255, 0) 203.77%);
    }

    .why-information {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.12rem;
      width: 40%;

      .why-heading {
        font-size: 0.36rem;
        font-weight: 800;
      }

      .why-description {
        font-size: 0.14rem;
        font-weight: 600;
      }
    }

    .data-lines {
      z-index: 0;
      position: absolute;
      right: 0;
      top: 0.64rem;
      height: 40%;
      width: 70%;
    }
  }

  .what {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 0.8rem;

    .what-heading {
      font-size: 0.32rem;
      font-weight: 800;
    }

    .diagonal-box {
      position: absolute;
      top: 0;
      right: 0;
    }

    .services {
      margin-top: 0.6rem;

      .service {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        padding: 0 0.2rem 0.2rem;
        min-height: 2rem;

        .service-heading {
          margin-top: 0.2rem;
          font-size: 0.16rem;
          font-weight: 700;
        }

        .service-description {
          margin-top: 0.2rem;
          font-size: 0.14rem;
          font-weight: 400;
          color: #605F74;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0.16rem;
          left: 0;
          width: 1px;
          height: 100%;
          background: #D9CAFF;
        }

        &.api {
          &::after {
            width: 0;
          }
        }
      }
    }

    .ai-services {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.6rem;

      .ai-services-heading {
        margin-top: 0.32rem;
        font-size: 0.32rem;
        font-weight: 800;
      }

      .ai-services-description {
        margin-top: 0.16rem;
        font-size: 0.14rem;
      }

      .defined-services {
        margin-top: 0.16rem;
        /deep/ .ai-service {
          margin-bottom: 0.32rem;
          .card {
            &-nlp {
              background: #FC9C0D20;
            }
            &-vca {
              background: #D9CAFF53;
            }
            &-aiu {
              background: #DCEEFF;
            }
            &-asa {
              background: #D8F8F2;
            }
          }
        }
      }
    }
  }
}
</style>
