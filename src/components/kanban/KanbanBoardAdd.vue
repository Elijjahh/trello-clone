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
        <div class="kanban-board-add__input">
          <label for="task-name">Название задачи</label>
          <input v-model="taskData.name" id="task-name" type="text" />
        </div>
        <div class="kanban-board-add__input">
          <label for="task-date">Срок задачи</label>
          <input v-model="taskData.datetime" id="task-date" type="datetime-local" />
        </div>
        <div class="kanban-board-add__checkbox">
          <input v-model="taskData.urgent" id="task-urgent" type="checkbox" />
          <label for="task-urgent">Срочная задача</label>
        </div>
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
