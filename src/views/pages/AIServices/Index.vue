<template>
  <div id="ai-services">
    <div v-if="$route.meta.showSidebar">
      <keep-alive>
        <sidebar :route="AIServices" />
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
import Sidebar from '@/views/components/Sidebar/Index.vue';
import AIServices from '@/router/AIServices/index';

export default {
  components: { Sidebar },
  data: () => ({
    AIServices,
  }),
};
</script>

<style lang="scss" scoped>
  #ai-services {
    display: flex;

    #ai-services_view-container {
      width: 100%;
    }
  }
</style>
