<script setup lang="ts">
import Card from "./components/card/Card.vue";
import CardHeader from "./components/card/CardHeader.vue";
import CardBody from "./components/card/CardBody.vue";
import CardFooter from "./components/card/CardFooter.vue";
import TaskList from "./components/task-list/TaskList.vue";
import TaskForm from "./components/task-form/TaskForm.vue";
import { useTodoStore } from "./store/useTodoStore";

const { clearCompleted } = useTodoStore();
</script>

<template>
  <div class="flex justify-center items-center py-12">
    <Card>
      <CardHeader title="Simple To-Do List">
        <template #extra
          ><button
            class="text-sm border px-2 rounded hover:bg-slate-50 hover:shadow-sm"
            @click="clearCompleted"
          >
            Clear completed
          </button></template
        >
      </CardHeader>
      <CardBody>
        <TaskList />
      </CardBody>
      <CardFooter>
        <TaskForm />
      </CardFooter>
    </Card>
  </div>
</template>
