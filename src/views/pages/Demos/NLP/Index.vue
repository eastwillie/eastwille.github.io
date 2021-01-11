<template>
    <div id="demos_nlp">
        NLP Demo page
        <div id="demos_nlp_view-container">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>
