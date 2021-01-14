<template>
  <div id="app-nav">
    <img
      src="../../../assets/images/icon/nav/Logo.png"
      alt="logo"
    >
    <el-menu
      mode="horizontal"
      router
      :default-active="$route.path"
    >
      <el-menu-item index="/home">
        {{ $t(`button['home']`) }}
      </el-menu-item>

      <el-submenu
        index="/solution"
        popper-class="solutions"
        :popper-append-to-body="false"
      >
        <template slot="title">
          {{ $t(`button['solutions']`) }}
        </template>
        <el-menu-item index="/solutions">
          {{ $t(`button['solutions']`) }}
        </el-menu-item>
        <el-menu-item index="/solutions/financial">
          <img
            src="../../../assets/images/icon/nav/Financial.svg"
            alt="financial"
          >
          {{ $t(`solutions['financial services']`) }}
        </el-menu-item>
        <el-menu-item index="/solutions/media">
          <img
            src="../../../assets/images/icon/nav/Media.svg"
            alt="financial"
          >
          {{ $t(`solutions['media and entertainment']`) }}
        </el-menu-item>
        <el-menu-item index="/solutions/healthcare">
          <img
            src="../../../assets/images/icon/nav/Healthcare.svg"
            alt="healthcare"
          >
          {{ $t(`solutions['healthcare']`) }}
        </el-menu-item>
        <el-menu-item index="/solutions/education">
          <img
            src="../../../assets/images/icon/nav/Education.svg"
            alt="education"
          >
          {{ $t(`solutions['education']`) }}
        </el-menu-item>
      </el-submenu>

      <el-submenu
        index="/services"
        popper-class="services"
        :popper-append-to-body="false"
      >
        <template slot="title">
          {{ $t(`button['services']`) }}
        </template>
        <el-submenu
          v-for="(mainRoute, mainIndex) in AIServices.children"
          :key="`${mainRoute.meta.navName}${mainIndex}`"
          :index="`/services/${mainRoute.path}`"
        >
          <template slot="title">
            <img
              :src="mainRoute.meta.icon"
              :alt="mainRoute.meta.navName"
            >
            <div class="introduction">
              <h4>{{ $t(`button['${mainRoute.meta.navName}']`) }}</h4>
              <p>{{ $t(`title['${mainRoute.meta.intro}']`) }}</p>
            </div>
          </template>
          <el-menu-item
            v-for="(subRoute, subIndex) in mainRoute.children.slice(0, -1)"
            :key="`${subRoute}${subIndex}`"
            :index="`/services/${mainRoute.path}/${subRoute.path}`"
          >
            {{ $t(`button['${subRoute.meta.navName}']`) }}
          </el-menu-item>
          <el-menu-item :index="`/services/${mainRoute.path}/introduction`">
            <span class="check-all-services">{{ $t(`button['Check All Services']`) }}</span>
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
    text-transform: capitalize;
  }

  #app-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
    background: #1A124B;

    /deep/ .services {
      & > .el-menu {
        padding: 0;
        & > .el-submenu {
          padding: 0.5em 0;
          &:hover {
            background: #F8F5FF;
          }
          & > .el-submenu__title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1em 0.5em;
            font-size: 0.15rem;
            color: #000;
            background: transparent;
            img {
              width: 3em;
              height: 3em;
            }
            .introduction {
              flex: 2;
              margin-left: 0.5em;
              max-width: 20em;
              h4 {
                line-height: 1.4;
                font-weight: 600;
              }
              p {
                line-height: 1.4;
                font-size: 0.12rem;
                color: #3A3955;
                white-space: normal;
              }
            }
          }
          .el-menu-item {
            border-bottom: 1px solid #D9CAFF;
            &:last-child {
              border-bottom: none;
            }
            &:hover {
              background: #F8F5FF;
            }
          }
        }
        .check-all-services {
          font-size: 0.14rem;
          color: #3A71FF;
          &:after {
            content: 'east';
            margin-left: 0.5em;
            vertical-align: -10%;
            font-family: 'Material Icons', sans-serif;
          }
        }
      }
      .el-menu-item {
        color: #000;
      }
      .el-submenu {
        .el-submenu__title {
          color: #000;
        }
      }
    }

    /deep/ .solutions {
      & > .el-menu {
        & > .el-menu-item {
          margin: 0.5em 0;
          padding: 0 1em;
          font-size: 0.15rem;
          &:hover {
            background: #F8F5FF;
          }
          img {
            margin-right: 0.5em;
          }
        }
      }
      .el-menu-item {
        color: #000;
      }
      .el-submenu {
        .el-submenu__title {
          color: #000;
        }
      }
    }

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

      & > .el-menu-item {
        @include font-style;
        color: $app-nav_font-color;
        border: none;
        text-transform: capitalize;

        &:hover {
          background: none;
        }

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
