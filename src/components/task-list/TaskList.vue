<script setup lang="ts">
import { storeToRefs } from "pinia";
import Task from "./task/Task.vue";
import { useTodoStore } from "../../store/useTodoStore";

const todoStore = useTodoStore();
const { todo } = storeToRefs(todoStore);
</script>

<template>
  <ul class="m-0 p-0 list-none flex flex-col">
    <Task v-for="task in todo" :key="task.id" :data="task" />
    <li
      v-if="!todo.length"
      class="border-b border-blue-400 py-1 pl-12 text-slate-400"
    >
      Not found task :)
    </li>
  </ul>
</template>
