<script setup lang="ts">
import type { TTaskData } from './types';
const props = defineProps<{ data: TTaskData }>();
</script>

<template>
  <div class="kanban-board-сard">
    <div v-if="props.data.urgent" class="kanban-board-сard__mark">Срочно</div>
    <div class="kanban-board-сard__title">{{ props.data.name }}</div>
    <div class="kanban-board-сard__datetime">{{ props.data.datetime }}</div>
  </div>
</template>

<style scoped lang="scss">
.kanban-board-сard {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px #00000049;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  &__mark {
    color: #fff;
    width: fit-content;
    padding: 5px;
    font-weight: 500;
    border-radius: 15px;
    background: #f6bc00;
  }

  &__title {
    font-size: 18px;
  }

  &__datetime {
  }
}
</style>
