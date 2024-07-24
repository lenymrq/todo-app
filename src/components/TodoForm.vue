<template>
  <form @submit.prevent="addTodo">
    <input
      class="todo-input"
      type="text"
      placeholder="Enter a new task"
      v-model="text"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const text = ref<string>('')
    const newId = ref<number>(0)

    const addTodo = () => {
      if (text.value.trim() === '') return

      const payload = {
        text: text.value,
        newId: newId.value
      }
      store.dispatch('addTodo', payload)
      text.value = ''
      newId.value++
    }

    return {
      text,
      addTodo
    }
  }
})
</script>

<style scoped>
.todo-form {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.todo-input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #313244;
  border-radius: 4px;
  background-color: #11111b;
  color: #cdd6f4;
  outline: none;
}

.todo-input:focus {
  border-color: #b4befe;
}

::placeholder {
  color: #a6adc8
}
</style>
