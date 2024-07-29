import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useStorage } from '@vueuse/core';

import type { TTaskData } from '@/components/kanban/types';

const useKanbanStore = defineStore('kanban', () => {
  const board = useStorage('kanban-board', {
    backlog: {
      title: 'Backlog',
      items: [
        {
          id: 1,
          name: 'Закончить делать клон Trello',
          datetime: '2024-07-29T08:00',
          urgent: true,
        },
        {
          id: 2,
          name: 'Тестовая запись)))',
          datetime: '2024-07-29T23:02',
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
  } as Record<string, any>);

  const getBoard = computed(() => {
    return board.value;
  });

  function addTask(
    taskData: { name: string; datetime: string; urgent: boolean },
    category: string,
  ) {
    const taskId = Math.floor(Math.random() * 10000);
    board.value[category].items.push({ ...taskData, id: taskId });
  }

  function removeTask(taskId: number) {
    Object.keys(board.value).forEach((key) => {
      board.value[key].items = board.value[key].items.filter(
        (item: TTaskData) => item.id !== taskId,
      );
    });
  }

  function updateTask(
    taskId: number,
    taskData: { name: string; datetime: string; urgent: boolean },
  ) {
    Object.keys(board.value).forEach((key) => {
      const taskIndex = board.value[key].items.findIndex((item: TTaskData) => item.id === taskId);

      if (taskIndex !== -1) {
        board.value[key].items[taskIndex] = {
          taskId,
          ...taskData,
        };
      }
    });
  }

  return { board, getBoard, addTask, removeTask, updateTask };
});

export default useKanbanStore;
