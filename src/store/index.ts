import { createStore, StoreOptions } from 'vuex'

interface TodoItem {
  id: number,
  text: string,
  completed: boolean
}

interface RootState {
  todos: TodoItem[]
}

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const storeOptions: StoreOptions<RootState> = {
  state: {
    todos: []
  },
  getters: {
    getTodos: state => state.todos
  },
  mutations: {
    [ADD_TODO] (state, payload: { newId: number; text: string }) {
      const newItem: TodoItem = {
        id: payload.newId,
        text: payload.text,
        completed: false
      }
      state.todos.unshift(newItem)
    },
    [TOGGLE_TODO] (state, id: number) {
      const item = state.todos.find(todo => todo.id === id)
      if (item) {
        item.completed = !item.completed
      }
    },
    [DELETE_TODO] (state, id: number) {
      const index = state.todos.findIndex(todo => todo.id === id)
      if (index !== -1) {
        state.todos.splice(index, 1)
      }
    }
  },
  actions: {
    addTodo: (context, payload: { newId: number; text: string }) => {
      context.commit(ADD_TODO, payload)
    },
    toggleTodo: (context, id: number) => {
      context.commit(TOGGLE_TODO, id)
    },
    deleteTodo: (context, id: number) => {
      context.commit(DELETE_TODO, id)
    }
  }
}

export default createStore(storeOptions)
