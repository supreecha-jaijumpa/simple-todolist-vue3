<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { Task } from "../../types/task";
import { generateUUID } from "../../utils/generateUUID";
import { useTodoStore } from "../../store/useTodoStore";
type Form = {
  task: string;
};
const getFreshForm = (): Form => ({ task: "" });

const { addTask } = useTodoStore();
const form = reactive<Form>(getFreshForm());
const rules = { task: { required } };
const v$ = useVuelidate(rules, form);

const handleSubmit = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    return;
  }
  const task: Task = {
    id: generateUUID(),
    title: form.task,
    isCompleted: false,
  };
  addTask(task);
  v$.value.$reset();
  Object.assign(form, getFreshForm());
};
</script>

<template>
  <form className="w-full flex space-x-2" @submit.prevent="handleSubmit">
    <input
      v-model="form.task"
      type="text"
      :class="[
        'flex-grow border py-1 px-2 rounded outline-none',
        v$.task.$errors.length ? 'border-red-400' : '',
      ]"
    />
    <button
      className="flex-shrink-0 border px-2 rounded hover:bg-slate-50 hover:shadow-sm"
      type="submit"
    >
      Add
    </button>
  </form>
</template>
