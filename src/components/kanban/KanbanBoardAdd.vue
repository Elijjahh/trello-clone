<script setup lang="ts">
import { ref } from 'vue';

import useKanbanStore from '@/stores/kanban';

const taskData = ref({
  name: '',
  datetime: '',
  urgent: false,
});

function resetTaskData() {
  taskData.value = {
    name: '',
    datetime: '',
    urgent: false,
  };
}

const isPopupShown = ref(false);

function togglePopup() {
  isPopupShown.value = !isPopupShown.value;
}

const kanban = useKanbanStore();

function addTask() {
  kanban.addTask(taskData.value);
  togglePopup();
  resetTaskData();
}
</script>

<template>
  <div class="kanban-board-add">
    <button @click="togglePopup" class="kanban-board-add__btn"></button>
    <AppPopup v-model:visible="isPopupShown" title="Создать задачу">
      <form @submit.prevent="addTask" class="kanban-board-add__form">
        <AppInput v-model="taskData.name" label="Название задачи" name="task-name" />
        <AppInput
          v-model="taskData.datetime"
          label="Срок задачи"
          name="task-date"
          type="datetime-local"
        />
        <AppCheckbox v-model="taskData.urgent" label="Срочная задача" name="task-urgent" />
        <button type="submit" class="kanban-board-add__submit">Создать</button>
      </form>
    </AppPopup>
  </div>
</template>

<style scoped lang="scss">
.kanban-board-add {
  &__btn {
    position: relative;
    width: 20px;
    height: 20px;

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

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
