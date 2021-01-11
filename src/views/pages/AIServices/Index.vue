<template>
    <div id="ai-services">
        <div v-if="$route.meta.showSlideMenu">Slide Menu</div>
        <div id="ai-services_view-container">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>
