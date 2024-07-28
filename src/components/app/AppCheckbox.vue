<script setup lang="ts">
const props = defineProps<{ label: string; name: string }>();
const checkboxValue = defineModel<boolean>();
</script>

<template>
  <div class="checkbox">
    <input v-model="checkboxValue" :id="props.name" type="checkbox" />
    <label :for="props.name">{{ props.label }}</label>
  </div>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
