<template>
  <div id="ai-services">
    <div v-if="$route.meta.showSlideMenu">
      Slide Menu
    </div>
    <div id="ai-services_view-container">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>
