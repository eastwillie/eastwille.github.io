<template>
  <div class="ai-service">
    <div class="ai-service-icon-container">
      <div
        class="ai-service-icon-background"
        :style="{'background-color': iconBackgroundColor}"
      />
      <img
        :src="src"
        :alt="title"
      >
      <slot name="icon" />
    </div>
    <div class="ai-service-content">
      <span class="ai-service-title">{{ title }}</span>
      <span class="ai-service-sub-title">{{ $t(`description['Empowering your advanced NLP based applications with simple API calls.']`) }}</span>
      <button class="read-more">
        {{ $t(`button['Read more']`) }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconBackgroundColor: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    readMoreLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
    color: #605F74;
  }

  .defined-services {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.2rem;
    margin-top: 0.16rem;

    .ai-service {
      position: relative;
      z-index: 0;
      display: flex;
      flex-direction: row;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 10px 18px rgba(235, 237, 244, 0.76);

      .ai-service-icon-container {
        position: relative;
        margin-bottom: 0.2rem;
        padding: 0.2rem 0 0 0.2rem;

        .ai-service-icon-background {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 93%;
          height: 96.5%;
          border-top-left-radius: 8px;
          background-color: black;
        }

        img {
          min-width: 96px;
          min-height: 96px;
        }
      }

      .ai-service-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.08rem;
        padding: 0.2rem 0.2rem 0.08rem;

        .ai-service-title {
          font-size: 0.2rem;
          font-weight: 800;
        }

        .ai-service-sub-title {
          font-size: 0.14rem;
          color: #605F74;
        }

        .read-more {
          background: none;
          border: none;
          font-family: 'Montserrat', sans-serif;
          color: #3A71FF;

          &::after {
            content: 'arrow_forward';
            font-family: 'Material Icons', sans-serif;
          }
        }
      }
    }
  }
}
</style>
