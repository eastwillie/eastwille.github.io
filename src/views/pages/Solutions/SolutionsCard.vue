<template>
  <div class="solution-card">
    <div
      class="solution-card-icon-background"
      :style="{
        background: iconBackgroundColor,
        boxShadow: iconShadowColor,
      }"
    >
      <img :src="src" :alt="title" />
    </div>
    <h2 class="solution-card-titile">{{ title }}</h2>
    <span class="solution-card-description">{{ description }}</span>
    <button class="read-more">
      {{ $t(`button['Read more']`) }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SolutionsCard',
  props: {
    iconBackgroundColor: {
      type: String,
      required: true,
    },
    iconShadowColor: {
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
    isActive: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.solution-card {
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding: 0.32rem 0.2rem;
  border-radius: 8px;

  &:hover {
    background: $background-white;
    box-shadow: 0px 10px 18px rgba(217, 202, 255, 0.4);
  }

  .solution-card-icon-background {
    width: 0.6rem;
    height: 0.6rem;
    margin-bottom: 0.37rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    img {
      max-width: 60px;
      max-height: 60px;
    }
  }

  .solution-card-titile {
    font-weight: 800;
    font-size: 0.18rem;
    color: $text-primary;
    margin-bottom: 0.12rem;
  }

  .solution-card-description {
    font-weight: 500;
    font-size: 0.14rem;
    color: $text-secondary;
    height: 1.21rem;
    margin-bottom: 0.04rem;
  }

  .read-more {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-family: Montserrat;
    color: $text-blue;
    font-weight: 500;
    font-size: 0.14rem;

    &::after {
      content: "arrow_forward";
      font-family: "Material Icons", sans-serif;
      margin-left: 0.1rem;
    }
  }
}
</style>
