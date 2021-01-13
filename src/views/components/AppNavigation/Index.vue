<template>
  <div id="app-nav">
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
        <el-menu-item index="/solutions/media">
          {{ $t(`button['media and entertainment']`) }}
        </el-menu-item>
        <el-menu-item index="/solutions/healthcare">
          {{ $t(`button['healthcare']`) }}
        </el-menu-item>
        <el-menu-item index="/solutions/education">
          {{ $t(`button['education']`) }}
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/services">
        <template slot="title">
          {{ $t(`button['services']`) }}
        </template>
        <el-submenu
          v-for="(mainRoute, mainIndex) in AIServices.children"
          :key="`${mainRoute.name}${mainIndex}`"
          :index="`/services/${mainRoute.path}`"
        >
          <template slot="title">
            {{ $t(`button['${mainRoute.name}']`) }}
          </template>
          <el-menu-item
            v-for="(subRoute, subIndex) in mainRoute.children"
            :key="`${subRoute}${subIndex}`"
            :index="`/services/${mainRoute.path}/${subRoute.path}`"
          >
            {{ $t(`button['${subRoute.name}']`) }}
          </el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="/pricing">
        {{ $t(`button['pricing']`) }}
      </el-menu-item>
      <el-menu-item index="/document">
        {{ $t(`button['document']`) }}
      </el-menu-item>
      <el-menu-item index="/custom-support">
        {{ $t(`button['custom support']`) }}
      </el-menu-item>
      <el-menu-item index="/contact">
        {{ $t(`button['contact']`) }}
      </el-menu-item>
      <el-menu-item index="/console">
        <el-button
          size="small"
          class="console-button"
        >
          {{ $t(`button['console']`) }}
        </el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import AIServices from '@/router/AIServices/index';

export default {
  data() {
    return {
      AIServices,
    };
  },
};
</script>
<style lang="scss" scoped>
  $app-nav_font-color: #FFF;
  @mixin active {
    font-weight: 600;
    i {
      font-weight: 600;
    }
  }

  @mixin font-style {
    font-size: 0.18rem;
    font-weight: 400;
  }

  #app-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    background: #1A124B;

    .console-button {
      text-transform: capitalize;
      @include font-style;
      color: #FFF;
      background: rgba(255, 255, 255, 0.2);
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
