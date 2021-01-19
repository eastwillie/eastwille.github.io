<template>
  <div class="sidebar">
    <el-menu
      router
      unique-opened
      class="menu"
      :collapse="collapse"
      :collapse-transition="false"
      :default-active="$route.path"
    >
      <el-submenu
        v-for="item in menuData"
        :key="item.index"
        :index="item.index"
        :class="item.classname"
        class="submenu"
      >
        <template slot="title">
          <img
            :src="item.icon"
            :alt="item.label"
            class="icon"
          >
          <span class="label">{{ item.label }}</span>
        </template>
        <el-menu-item
          v-for="child in item.children"
          :key="child.index"
          :index="child.index"
          class="menu-item"
        >
          {{ child.label }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <button
      class="toggle"
      :class="{ collapse }"
      @click="toggleClick"
    >
      <i class="el-icon-arrow-right icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    collapse: false,
  }),
  computed: {
    menuData() {
      const parentPath = this.route.path;
      return this.route.children.map((route) => ({
        label: route.meta.navName,
        index: `${parentPath}/${route.path}`,
        icon: route.meta.iconCompact,
        classname: route.path,
        children: route.children.map((child) => ({
          label: child.meta.navName,
          index: `${parentPath}/${route.path}/${child.path}`,
        })),
      }));
    },
  },
  methods: {
    toggleClick() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style lang="scss" scoped>
  $colors: (
    nlp: #FC9C0D,
    vca: #521FD1,
    aiu: #4791FF,
    asa: #14D4B2,
  );
  $toggle-bg: #D9CAFF;
  $toggle-color: #521FD1;
  $menu-width: 2.36rem;

  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: 0.37rem;
    border-right: $border-primary;

    .menu {
      max-width: $menu-width;
      border-right: none;

      .submenu {
        /deep/ .el-submenu__title {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 0.6rem;
          padding: 0.11rem 0.2rem;
          white-space: initial;

          &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: -1px;
            bottom: 0;

            width: 3px;
            height: 100%;
          }
        }

        .icon {
          margin-right: 0.13rem;
        }

        .label {
          opacity: 0.6;
          font-weight: 600;
          font-size: 0.14rem;
          line-height: 0.19rem;
          text-transform: capitalize;
        }

        &.is-opened .label {
          opacity: 1;
        }

        /deep/ .el-submenu__icon-arrow {
          display: none;
        }

        .menu-item {
          position: relative;
          height: 0.42rem;
          padding-right: 0.14rem;
          line-height: 0.42rem;
          font-size: 0.12rem;
          text-transform: capitalize;
          color: $text-primary;
          min-width: $menu-width;

          &.is-active {
            font-weight: 600;
          }

          &:before {
            position: absolute;
            content: 'east';
            left: 0.14rem;
            color: $text-dimmed;
            font-family: 'Material Icons', sans-serif;
            text-transform: none;
          }
        }

        @each $name, $color in $colors {
          &.#{$name} {
            &.is-opened /deep/ .el-submenu__title {
              background: linear-gradient(90deg, rgba($color, 0.1) 1.87%, rgba(white, 0) 132.92%);

              &:after {
                background: $color;
              }
            }

            .menu-item.is-active {
              color: $color;

              &:before {
                color: $color;
              }
            }
          }
        }
      }
    }

    .toggle {
      display: flex;
      justify-content: flex-end;
      height: 0.6rem;
      width: 100%;
      color: $toggle-color;
      border: none;
      background: linear-gradient(90deg, rgba($toggle-bg, 0.37) -27.11%, rgba(white, 0) 97.39%);;
      font-size: 0.18rem;
      padding: 0.2rem;

      &.collapse {
        .icon {
          margin: 0 auto;
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
