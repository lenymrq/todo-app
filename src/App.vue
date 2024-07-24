<template>
  <div class="page-wrapper">
    <div class="container">
      <h1>Todo List</h1>
      <div id="app">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

export default defineComponent({
  components: {
    TodoForm,
    TodoList
  }
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #181825;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(17, 17, 27, 1);
}

.page-wrapper {
  padding-top: 40px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #b4befe;
  text-align: center;
}
</style>
