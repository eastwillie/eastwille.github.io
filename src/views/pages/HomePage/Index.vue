<template>
  <div id="home-page">
    <div class="panel rodin">
      <div class="content">
        <div class="labels-container">
          <span class="perception">Perception & Cloud Powered</span>
          <span class="all-stack">All-Stack AI Service Platform</span>
          <span class="empowering">Empowering Intelligent Apps with Our Customizable AI Technology</span>
        </div>
        <div class="rodin-actions">
          <button class="btn-action demo">
            Request Demo
          </button>
          <button class="btn-action check">
            Check our services
          </button>
        </div>
        <div class="rodin-stats">
          <div class="stat">
            <span class="count">50+</span>
            <span class="count-description">AI Services Covering</span>
          </div>
          <div class="stat">
            <span class="count">5</span>
            <span class="count-description">Major AI Domains</span>
          </div>
        </div>
      </div>
    </div>
    <div class="vision content panel">
      <div class="introduction">
        <div class="introduction-heading">
          <img
            :src="quote"
            alt=""
          > Introduction to Rodin
        </div>
        <div class="introduction-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
      <div class="our-vision">
        <span class="tagline">World’s First All-Stake One-Stop AI Service Platform</span>
        <span class="our-vision-heading">Our Vision</span>
        <span class="our-vision-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
        <span class="our-vision-description">Vivamus arcu felis bibendum ut tristique et egestas. Pellentesque nec nam aliquam sem et tortor consequat id. Porttitor rhoncus dolor purus non enim. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.</span>
        <span class="our-vision-description">Elit ut aliquam purus sit amet luctus venenatis. Amet porttitor eget dolor morbi non arcu. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Pellentesque elit eget gravida cum sociis. Tellus mauris a diam maecenas sed enim ut sem viverra.</span>
      </div>
    </div>
    <div class="why content">
      <div class="why-information">
        <span class="why-heading">Why choose us?</span>
        <span class="why-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <button class="btn-action why-demo">
        Request Demo
      </button>
    </div>
    <div class="what content panel">
      <span class="what-heading">What Can You Get with Rodin?</span>
    </div>
  </div>
</template>
<script>
import quote from '@/assets/images/quote.svg';

export default {
  computed: {
    quote() {
      return quote;
    },
  },
  mounted() {
    this.$methods.methodsExample();
  },
};
</script>
<style lang="scss" scoped>
  #home-page {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    background: #F7F8FF;

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

    .btn-action {
      height: 0.6rem;
      font-family: 'Montserrat';
      font-size: 0.18rem;
      color: white;
      border-radius: 6px;
      border: none;
    }

    .rodin {
      flex-direction: row;
      height: calc(100vh - 61px); // had to use px - due to Element UI's component used px
      min-height: calc(100vh - 61px); // had to use px - due to Element UI's component used px
      padding-top: 2.4rem;
      background: linear-gradient(339.91deg, #33029B -2.33%, #1A124B 98.52%);
      color: white;

      .labels-container {
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
        margin-top: 0.4rem;
        display: flex;
        gap: 0.1rem;

        .demo {
          width: 2rem;
          background: linear-gradient(100.62deg, #3A71FF 48.27%, rgba(121, 58, 255, 0) 203.77%);
        }

        .check {
          width: 2.46rem;
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
    height: 2.22rem;
    margin-top: -0.6rem;
    background-color: white;
    border-radius: 0.06rem 0.06rem 0 0;
    padding: 0.4rem;
    padding-top: 0.30rem;
    border-bottom: 1px solid #3B72FF;

    .introduction-heading {
      font-size: 0.28rem;
      font-weight: 700;
    }

    .introduction-description {
      margin-top: 0.24rem;
      font-size: 0.16rem;
    }
  }

  .vision {
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;

    .our-vision {
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
      }

      .our-vision-description {
        margin-top: 0.20rem;
        font-size: 0.14rem;
      }
    }
  }

  .why {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 1.64rem;
    width: 100vw;
    padding-top: 0.3rem;
    color: white;
    background: linear-gradient(276.75deg, #33029B 1.11%, #1A124B 85.2%);

    .why-demo {
      width: 2rem;
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
  }

    .what {
      display: flex;
      flex-direction: column;
      padding-top: 0.8rem;

      .what-heading {
        font-size: 0.32rem;
        font-weight: 800;
      }
    }
  }
</style>
