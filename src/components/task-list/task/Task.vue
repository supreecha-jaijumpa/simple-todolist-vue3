<script setup lang="ts">
import { PropType } from "vue";
import { type Task as TaskType } from "../../../types/task";
import { useTodoStore } from "../../../store/useTodoStore";

const { data } = defineProps({
  data: {
    type: Object as PropType<TaskType>,
    required: true,
  },
});
const { id, title } = data;
const { updateTask } = useTodoStore();

const handleChange = (e: Event) => {
  const updatedTask = {
    id,
    title,
    isCompleted: (e.target as HTMLInputElement).checked,
  };
  updateTask(updatedTask);
};
</script>

<template>
  <li
    :class="[
      'flex border-b border-blue-400 py-1',
      data.isCompleted ? 'opacity-50' : '',
    ]"
  >
    <div className="w-8 flex justify-center">
      <input :id="`task-${id}`" type="checkbox" @change="handleChange" />
    </div>
    <label
      :for="`task-${id}`"
      :class="['pl-4', data.isCompleted ? 'line-through' : '']"
    >
      {{ data.title }}
    </label>
  </li>
</template>
