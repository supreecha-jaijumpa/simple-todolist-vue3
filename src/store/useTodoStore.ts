import { ref } from "vue";
import { defineStore } from "pinia";
import { Task } from "../types/task";

export const useTodoStore = defineStore("todo", () => {
  const todo = ref<Task[]>([]);

  const addTask = (task: Task) => {
    const updatedTodo = [...todo.value, task];
    todo.value = updatedTodo;
  };

  const updateTask = (task: Task) => {
    const updatedTodo = [...todo.value];
    const targetTaskIndex = updatedTodo.findIndex((e) => e.id === task.id);
    Object.assign(updatedTodo[targetTaskIndex], task);
    todo.value = updatedTodo;
  };

  const clearCompleted = () => {
    const updatedTodo = todo.value.filter((e) => !e.isCompleted);
    todo.value = updatedTodo;
  };

  return {
    todo,
    addTask,
    updateTask,
    clearCompleted,
  };
});
