<script setup lang="ts">
const props = defineProps<{ label: string; name: string; type?: string }>();
const inputValue = defineModel<string>();
</script>

<template>
  <div class="input">
    <label :for="props.name">{{ props.label }}</label>
    <input v-model="inputValue" :id="props.name" :type="props?.type || 'text'" />
  </div>
</template>

<style scoped lang="scss">
.input {
  display: grid;

  input {
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>
