<template>
    <div id="the_nav">
        <el-menu
            mode="horizontal"
            router
            :default-active="$route.path"
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
<style lang="scss" scoped>
    $app-nav_font-color: #FFF;
    @mixin active {
        font-weight: 600;
        i {
            font-weight: 600;
        }
    }
    @mixin font-style {
        font-size: 0.16rem;
        font-weight: lighter;
    }
    #app-nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
        text-transform: capitalize;
        background: linear-gradient(339.91deg, #33029B -2.33%, #1A124B 98.52%);

        .console-button {
            text-transform: capitalize;
            @include font-style;
            color: #FFF;
            background: rgba(255,255,255,0.2);
            border: none;
        }

        /deep/ .el-menu--horizontal {
            border: none;
            background: none;
            .el-menu-item {
                @include font-style;
                color: $app-nav_font-color;
                border: none;
                &.is-active {
                    color: $app-nav_font-color;
                    @include active;
                    border: none;
                    background: none;
                }
            }
            .el-submenu {
                .el-submenu__title {
                    @include font-style;
                    color: $app-nav_font-color;
                    i {
                        color: $app-nav_font-color;
                    }
                    &:hover {
                        background: none;
                    }
                }
                &.is-active {
                    .el-submenu__title {
                        @include active;
                        border: none;
                    }
                }
            }
            .el-menu-item:not(.is-disabled):hover {
                background: none;
            }
            .el-icon-arrow-down {
                margin-left: 0;
                &:before {
                    content: 'arrow_drop_down';
                    font-family: 'Material Icons', sans-serif;
                    font-size: 2em;
                }
            }
        }
    }
</style>
