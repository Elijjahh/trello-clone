<script setup lang="ts">
import { ref } from 'vue';

const isPopupShown = ref(false);

function showPopup() {
  isPopupShown.value = !isPopupShown.value;
}

function add() {
  showPopup();
}

const date = new Date();
const formattedDate = date.toISOString().slice(0, 16);

const taskData = ref({
  name: '',
  datetime: formattedDate,
  urgent: false,
});

function addTask() {
  console.log(taskData.value);
}
</script>

<template>
  <div class="kanban-board-add">
    <button @click="add" class="kanban-board-add__btn"></button>
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

  &__input {
    display: grid;

    input {
      border: 1px solid #000;
      border-radius: 5px;
      padding: 5px;
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
