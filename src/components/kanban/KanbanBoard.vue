<script setup lang="ts">
import KanbanBoardColumn from '@/components/kanban/KanbanBoardColumn.vue';
import useKanbanStore from '@/stores/kanban';

const kanban = useKanbanStore();
</script>

<template>
  <section class="kanban-board">
    <KanbanBoardColumn
      v-for="(columnConfig, columnName) in kanban.getBoard"
      :key="columnName"
      :category="columnName"
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
