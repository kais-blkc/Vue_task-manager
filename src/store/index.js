import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
    reverse: false,
  },
  getters: {},
  mutations: {
    addTaskVuex(state, curTask) {
      const task = { task: curTask, done: false }
      if (state.reverse) {
        state.tasks.unshift(task)
      } else {
        state.tasks.push(task)
      }
    },
    removeTaskVuex(state, taskName) {
      state.tasks = state.tasks.filter((f) => f.task !== taskName)
    },
    editTaskVuex(state, [index, text]) {
      state.tasks[index].task = text
    },
    changeDoneVuex(state, [index, doneState]) {
      state.tasks[index].done = doneState
    },
    reverseTaskListVuex(state) {
      state.tasks = state.tasks.reverse()
      state.reverse = !state.reverse
    }
  }
})
