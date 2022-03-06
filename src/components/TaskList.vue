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
          :task="task"
          :index="key"
          @removeTask="removeTask"
          @editTask="editTask"
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
      tasks: JSON.parse(localStorage.tasks) || [],
      curTask: '',
      show: true
    }
  },
  methods: {
    addTask() {
      if (!this.curTask) {
        alert('Заполните поле')
        return false
      }

      if (this.tasks.includes(this.curTask)) {
        alert('Уже есть такая задача')
        return false
      }

      this.tasks.push(this.curTask)
      this.curTask = ''
    },
    removeTask(taskName) {
      this.tasks = this.tasks.filter((f) => f !== taskName)
    },
    editTask([index, text]) {
      this.tasks[index] = text
    },
    enterKey($event) {
      if ($event.code === 'Enter') {
        this.addTask()
      }
    },
    saveTasksToLocal() {
      localStorage.tasks = JSON.stringify(this.tasks)
      const data = JSON.parse(localStorage.tasks)
      console.log(data)
    }
  },
  watch: {
    tasks: {
      handler(val, oldVal) {
        this.saveTasksToLocal()
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
