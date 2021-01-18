<template>
  <div class="example-text">
    <h5>
      {{ $t('services.exampleText.title') }}
    </h5>
    <div>
      {{ $t('services.exampleText.subtitle') }}
    </div>
    <el-select
      :value="currentExample"
      :disabled="loading"
      @input="onInput"
    >
      <el-option
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        :label="item.value.length > 20 ? `${item.value.slice(0, 20)}...` : item.value"
      />
    </el-select>
    <el-input
      :value="items[currentExample] && items[currentExample].value"
      type="textarea"
      disabled
    />
  </div>
</template>

<script>
export default {
  name: 'ExampleText',
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentExample: {
      type: Number,
      default: () => null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(newValue) {
      this.$emit('update:currentExample', newValue);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
