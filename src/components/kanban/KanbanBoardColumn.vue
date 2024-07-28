<script setup lang="ts">
import draggable from 'vuedraggable';

import KanbanBoardCard from '@/components/kanban/KanbanBoardCard.vue';
import KanbanBoardAdd from '@/components/kanban/KanbanBoardAdd.vue';

import type { TTaskData } from './types';
const props = defineProps<{ items: TTaskData[]; title: string }>();
</script>

<template>
  <div class="kanban-board-column">
    <div class="kanban-board-column__header">
      <h3 class="kanban-board-column__title">{{ props.title }}</h3>
      <KanbanBoardAdd />
    </div>

    <draggable class="kanban-board-column__items" :list="props.items" group="kanban" itemKey="name">
      <template #item="{ element }">
        <KanbanBoardCard :data="element" />
      </template>
    </draggable>
  </div>
</template>

<style scoped lang="scss">
.kanban-board-column {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px #00000049;
  padding: 20px 10px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    font-size: 20px;
  }

  &__items {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 50px;
    height: 100%;
  }
}
</style>
