<template>
  <div class="sidebar">
    <el-tree
      ref="tree"
      :data="treeData"
      :default-expanded-keys="expandedKeys"
      :default-checked-keys="checkedKeys"
      node-key="name"
      check-strictly
      accordion
      class="tree"
      @node-click="onNodeClick"
    />
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    expandedKeys() {
      return this.$route.matched.map((el) => el.name);
    },
    checkedKeys() {
      return [this.$route.matched[this.$route.matched.length - 1].name];
    },
    treeData() {
      return this.items.map((route) => ({
        label: route.meta.navName,
        name: route.name,
        children: route.children.map((child) => ({
          label: child.meta.navName,
          name: child.name,
        })),
      }));
    },
  },
  watch: {
    $route() {
      this.$refs.tree.setCheckedKeys(this.checkedKeys);
    },
  },
  methods: {
    onNodeClick(data) {
      if (data.name && this.$route.name !== data.name) {
        this.$router.push({ name: data.name });
      }
      this.$refs.tree.setCheckedNodes(this.checkedKeys);
    },
  },
};
</script>

<style lang="scss" scoped>
  .sidebar {
    height: 100%;
    padding: 0.2rem;
    background: $background-header;

    .tree {
      background: $background-header;
    }

    /deep/ .el-tree-node.is-checked >.el-tree-node__content > .el-tree-node__label {
      font-weight: 700;
      color: $text-dark-bg;
    }

    /deep/ .el-tree-node__content:hover {
      background-color: transparent;
      color: $text-dark-bg;
    }

    /deep/ .el-tree-node:focus>.el-tree-node__content {
      background-color: transparent;
    }
  }
</style>
