<template>
  <ul class="tasks">
    <TransitionGroup name="list" tag="ul">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        class="task"
        @click="toggleTodo(todo.id)"
      >
        {{ todo.text }}
        <span class="delete" @click.stop="deleteTodo(todo.id)">X</span>
      </li>
    </TransitionGroup>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const todos = computed(() => store.getters.getTodos)

    const toggleTodo = (id: number) => {
      store.dispatch('toggleTodo', id)
    }

    const deleteTodo = (id: number) => {
      store.dispatch('deleteTodo', id)
    }

    return {
      todos,
      toggleTodo,
      deleteTodo
    }
  }
})
</script>

<style scoped>
.tasks {
  list-style-type: none;
  padding-top: 10px
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #11111b;
  border: 1px solid #b4befe;
  border-radius: 4px;
  cursor: pointer;
}

.task.completed {
  color: #a6e3a1;
  border-color: #a6e3a1;
}

.task:hover {
  background-color: #1e1e2e;
}

.delete {
  cursor: pointer;
  color: #f38ba8;
  font-size: 1.2em;
}

.list-enter-active, .list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
