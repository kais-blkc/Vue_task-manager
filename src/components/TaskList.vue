<template>
  <div class="task-list-wrapper">
    <div class="add-task flex">
      <input
        type="text"
        class="transition ease delay-200 rounded border-solid border-2 focus:border-green-600 px-2 py-1 w-full"
        placeholder="Введите задачу"
        v-model="curTask"
        @keyup="enterKey"
      />

      <button
        class="add-task-btn cursor-pointer inline-block"
        @click="addTask(curTask)"
      >
        <fa icon="circle-plus"></fa>
      </button>
    </div>

    <div class="task-list">
      <transition-group name="fade">
        <task-item
          v-for="(task, key) in tasks"
          :key="key"
          :task="task.task"
          :index="key"
          :classes="task.done"
          @removeTask="removeTask"
          @editTask="editTask"
          @changeDone="changeDone"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  data() {
    return {
      tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
      curTask: '',
      show: true
    }
  },
  methods: {
    checkInput() {
      let notSuchTask = true

      if (!this.curTask) {
        alert('Заполните поле')
        notSuchTask = false
      }

      this.tasks.forEach((t) => {
        if (t.task === this.curTask) {
          alert('Такая задача уже есть')
          notSuchTask = false
        }
      })

      return notSuchTask
    },
    addTask() {
      if (!this.checkInput()) return false

      this.tasks.push({
        task: this.curTask,
        done: false
      })
      this.curTask = ''
    },
    removeTask(taskName) {
      this.tasks = this.tasks.filter((f) => f.task !== taskName)
    },
    editTask([index, text]) {
      this.tasks[index].task = text
    },
    enterKey($event) {
      if ($event.code === 'Enter') {
        this.addTask()
      }
    },
    changeDone([index, doneState]) {
      this.tasks[index].done = doneState
    }
  },
  watch: {
    tasks: {
      handler() {
        localStorage.tasks = JSON.stringify(this.tasks)
      },
      deep: true
    }
  }
}
</script>

<style lang="sass" scoped>

// Fade animation
.fade-enter-active,
.fade-leave-active
  transition: all 0.3s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0
  margin-top: -20px

.task-list-wrapper
  margin: 35px auto 0
  max-width: 720px

input
  outline: none

.add-task-btn
  width: 35px
  height: 35px
  margin-left: 15px
  color: rgb(22 163 74)
  transition: all .2s ease
  outline: none
  &:hover,
  &:focus
    opacity: .8
  svg
    width: 100%
    height: 100%
</style>
