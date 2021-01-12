<template>
    <div id="the_nav">
        <el-menu
            mode="horizontal"
            router
            :default-active="$route.matched[0].path"
        >
            <el-menu-item index="/home">
                {{ $t(`button['home']`) }}
            </el-menu-item>

            <el-submenu index="/solution">
                <template slot="title">
                    {{ $t(`button['solutions']`) }}
                </template>
                <el-menu-item
                    index="2-1"
                    disabled
                >
                    Item1
                </el-menu-item>
                <el-menu-item
                    index="2-2"
                    disabled
                >
                    Item2
                </el-menu-item>
                <el-menu-item
                    index="2-3"
                    disabled
                >
                    Item3
                </el-menu-item>
            </el-submenu>

            <el-submenu index="/services">
                <template slot="title">
                    {{ $t(`button['services']`) }}
                </template>
                <el-menu-item index="/services/nlp/index">
                    {{ $t(`button['NLP']`) }}
                </el-menu-item>
            </el-submenu>

            <el-menu-item
                index="/pricing"
                disabled
            >
                {{ $t(`button['pricing']`) }}
            </el-menu-item>
            <el-menu-item
                index="/document"
                disabled
            >
                {{ $t(`button['document']`) }}
            </el-menu-item>
            <el-menu-item
                index="/custom-support"
                disabled
            >
                {{ $t(`button['custom support']`) }}
            </el-menu-item>
            <el-menu-item
                index="/contact"
                disabled
            >
                {{ $t(`button['contact']`) }}
            </el-menu-item>
        </el-menu>
    </div>
</template>
