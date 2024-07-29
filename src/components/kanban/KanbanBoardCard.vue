<script setup lang="ts">
import { computed } from 'vue';

import type { TTaskData } from './types';
import KanbanBoardEdit from './KanbanBoardEdit.vue';
import KanbanBoardRemove from './KanbanBoardRemove.vue';

const props = defineProps<{ data: TTaskData }>();

function formatDate(dateString: string) {
  const date = new Date(dateString);

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

const getDatetime = computed(() => {
  const datetime = props.data.datetime.split('T');
  return `${formatDate(datetime[0])}, ${datetime[1]}`;
});
</script>

<template>
  <div class="kanban-board-сard">
    <div v-if="props.data.urgent" class="kanban-board-сard__mark">Срочно</div>
    <div class="kanban-board-сard__title">{{ props.data.name }}</div>
    <div class="kanban-board-сard__footer">
      <div>{{ getDatetime }}</div>
      <div class="kanban-board-сard__options">
        <KanbanBoardEdit :taskData="props.data" />
        <KanbanBoardRemove :taskId="props.data.id" />
      </div>
    </div>
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

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__options {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
