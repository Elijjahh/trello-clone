import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import type { TTaskData } from '@/components/kanban/types';

const useKanbanStore = defineStore('kanban', () => {
  const board = ref({
    backlog: {
      title: 'Backlog',
      items: [
        {
          id: 1,
          name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, consequatur.',
          datetime: '23-07-2024',
          urgent: true,
        },
        {
          id: 2,
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
  }) as Record<string, any>;

  const getBoard = computed(() => {
    return board.value;
  });

  function addTask(taskData: { name: string; datetime: string; urgent: boolean }) {
    const taskId = Math.floor(Math.random() * 10000);
    board.value.backlog.items.push({ ...taskData, id: taskId });
  }

  function removeTask(taskId: number) {
    for (const category of board.value) {
      board.value[category].items = board.value[category].items.filter(
        (item: TTaskData) => item.id !== taskId,
      );
    }
  }

  function updateTask(
    taskId: number,
    taskData: { name: string; datetime: string; urgent: boolean },
  ) {
    for (const category in board.value) {
      const taskIndex = board.value[category].items.findIndex(
        (item: TTaskData) => item.id === taskId,
      );

      if (taskIndex !== -1) {
        board.value[category].items[taskIndex] = {
          taskId,
          ...taskData,
        };
        break;
      }
    }
  }

  return { board, getBoard, addTask, removeTask, updateTask };
});

export default useKanbanStore;