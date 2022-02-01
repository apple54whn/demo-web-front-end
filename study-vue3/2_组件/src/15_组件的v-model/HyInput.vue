<template>
  <div>
    <input v-model="value" />
    <input v-model="titleData" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ['update:modelValue', 'update:title'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      },
    },
    titleData: {
      set(title) {
        this.$emit('update:title', title)
      },
      get() {
        return this.title
      },
    },
  },
}
</script>
