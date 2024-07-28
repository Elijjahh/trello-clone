<script setup lang="ts">
import { ref } from 'vue';

import useKanbanStore from '@/stores/kanban';

const isPopupShown = ref(false);

function togglePopup() {
  isPopupShown.value = !isPopupShown.value;
}

const kanban = useKanbanStore();
const props = defineProps<{ taskId: number }>();

function removeTask() {
  kanban.removeTask(props.taskId);
  togglePopup();
}
</script>

<template>
  <div class="kanban-board-remove">
    <button @click="togglePopup" class="kanban-board-remove__btn">remove</button>
    <AppPopup v-model:visible="isPopupShown" title="Удалить задачу">
      <p class="kanban-board-remove__note">Вы действительно хотите удалить задачу?</p>
      <div class="kanban-board-remove__footer">
        <button @click="togglePopup" class="kanban-board-remove__cancel">Отмена</button>
        <button @click="removeTask" class="kanban-board-remove__confirm">Удалить</button>
      </div>
    </AppPopup>
  </div>
</template>

<style scoped lang="scss">
.kanban-board-remove {
  &__btn {
  }

  &__note {
  }

  &__footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
  }

  &__cancel {
  }

  &__confirm {
    color: red;
  }
}
</style>
