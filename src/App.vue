<template>
  <div class="container px-3">
    <h1 class="text-4xl md:text-5xl font-bold text-center my-5 text-green-700">
      Vue task manager
    </h1>

    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList
  }
}
</script>

<style lang="scss"></style>
