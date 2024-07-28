<script setup lang="ts">
import { ref } from 'vue';

import useKanbanStore from '@/stores/kanban';

const props = defineProps<{ taskId: number }>();
const kanban = useKanbanStore();

const isPopupShown = ref(false);
function togglePopup() {
  isPopupShown.value = !isPopupShown.value;
}

function removeTask() {
  kanban.removeTask(props.taskId);
  togglePopup();
}
</script>

<template>
  <div class="kanban-board-remove">
    <button @click="togglePopup">remove</button>
    <AppPopup v-model:visible="isPopupShown" title="Удалить задачу">
      <p>Вы действительно хотите удалить задачу?</p>
      <div class="kanban-board-remove__footer">
        <button @click="togglePopup">Отмена</button>
        <button @click="removeTask" class="kanban-board-remove__confirm">Удалить</button>
      </div>
    </AppPopup>
  </div>
</template>

<style scoped lang="scss">
.kanban-board-remove {
  &__footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
  }

  &__confirm {
    color: red;
  }
}
</style>
