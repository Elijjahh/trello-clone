<script setup lang="ts">
import { ref } from 'vue';

import type { TTaskData } from './types';
import useKanbanStore from '@/stores/kanban';

const props = defineProps<{ taskData: TTaskData }>();

const taskData = ref({
  name: props.taskData.name,
  datetime: props.taskData.datetime,
  urgent: props.taskData.urgent,
});

const isPopupShown = ref(false);

function togglePopup() {
  isPopupShown.value = !isPopupShown.value;
}

const kanban = useKanbanStore();

function editTask() {
  if (taskData.value.name && taskData.value.datetime) {
    kanban.updateTask(props.taskData.id, taskData.value);
    togglePopup();
  }
}
</script>

<template>
  <div class="kanban-board-edit">
    <button @click="togglePopup" class="kanban-board-edit__btn">edit</button>
    <AppPopup v-model:visible="isPopupShown" title="Редактировать задачу">
      <form @submit.prevent="editTask" class="kanban-board-edit__form">
        <AppInput v-model="taskData.name" label="Название задачи" name="task-name" />
        <AppInput
          v-model="taskData.datetime"
          label="Срок задачи"
          name="task-date"
          type="datetime-local"
        />
        <AppCheckbox v-model="taskData.urgent" label="Срочная задача" name="task-urgent" />
        <button type="submit" class="kanban-board-edit__submit">Изменить</button>
      </form>
    </AppPopup>
  </div>
</template>

<style scoped lang="scss">
.kanban-board-edit {
  &__btn {
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
