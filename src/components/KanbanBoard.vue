<script setup lang="ts">
import { ref } from 'vue';
import KanbanBoardColumn from '@/components/KanbanBoardColumn.vue';

const kanban = ref({
  backlog: {
    title: 'Backlog',
    items: [
      {
        name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur.',
        datetime: '23-07-2024',
        urgent: true,
      },
      {
        name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur.',
        datetime: '23-07-2024',
        urgent: false,
      },
    ],
  },
  inProgress: {
    title: 'In Progress',
    items: [],
  },
  done: {
    title: 'Done',
    items: [],
  },
});
</script>

<template>
  <section class="kanban-board">
    <KanbanBoardColumn
      v-for="(columnConfig, columnName) in kanban"
      :key="columnName"
      :title="columnConfig.title"
      :items="columnConfig.items"
    />
  </section>
</template>

<style scoped lang="scss">
.kanban-board {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 20px;
}
</style>
