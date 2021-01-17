<template>
  <div id="ai-services">
    <div v-if="$route.meta.showSlideMenu">
      <keep-alive>
        <slide-menu :items="AIServices.children" />
      </keep-alive>
    </div>
    <div id="ai-services_view-container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>

<script>
import SlideMenu from '@/views/components/SlideMenu/Index.vue';
import AIServices from '@/router/AIServices/index';

export default {
  components: { SlideMenu },
  data: () => ({
    AIServices,
  }),
};
</script>

<style lang="scss" scoped>
  #ai-services {
    display: flex;
  }
</style>
