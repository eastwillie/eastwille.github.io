<template>
  <div class="input-language">
    <h5 class="title">
      {{ $t('services.inputLanguage.title') }}
    </h5>
    <el-radio-group
      :value="currentLanguage"
      :disabled="loading"
      @input="onChange"
    >
      <el-radio-button
        v-for="item in items"
        :key="item.id"
        :label="item.id"
      >
        {{ item.name }}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'InputLanguage',
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentLanguage: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(newValue) {
      this.$emit('update:currentLanguage', newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
  .input-language {
  }
</style>
