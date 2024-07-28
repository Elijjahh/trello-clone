<script setup lang="ts">
import { computed } from 'vue';

const visible = defineModel<boolean>('visible');
function close() {
  visible.value = false;
}

const props = defineProps<{ title?: string }>();
const title = computed(() => {
  return props.title || 'Всплывающее окно';
});
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="popup">
      <div class="popup__content">
        <div class="popup__header">
          <div class="popup__title">{{ title }}</div>
          <div @click="close" class="popup__close"></div>
        </div>
        <div class="popup__body">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.popup {
  position: fixed;
  inset: 0;
  background: #00000075;

  &__content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 300px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 4px #00000049;
    padding: 20px 10px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
  }

  &__close {
    position: relative;
    width: 20px;
    height: 20px;

    transform: rotate(45deg);

    &:before {
      content: '';
      width: 100%;
      height: 1px;
      background: #000;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }

    &:after {
      content: '';
      width: 1px;
      height: 100%;
      background: #000;
      position: absolute;
      top: 0;
      right: 50%;
      transform: translateX(50%);
    }
  }

  &__body {
    margin-top: 20px;
  }
}
</style>
