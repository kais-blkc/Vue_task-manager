<template>
  <div class="my-container px-3">
    <h1 class="text-4xl md:text-5xl font-bold text-center my-5 text-green-700">
      Vue task manager
    </h1>

    <sort-btn></sort-btn>

    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
import SortBtn from './components/SortBtn.vue'

export default {
  name: 'App',
  components: {
    TaskList,
    SortBtn
  }
}
</script>

<style lang="scss">
.my-container {
  margin: 0 auto;
  max-width: 767px;
}
</style>
