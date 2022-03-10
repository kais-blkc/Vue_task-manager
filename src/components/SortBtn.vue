<template>
  <button class="sortTaks" @click="reverseTaskList">
    <fa v-if="reverse" icon="arrow-down-9-1"></fa>
    <fa v-else icon="arrow-down-1-9"></fa>
  </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SortBtn',
  computed: mapState(['reverse']),
  methods: {
    ...mapMutations(['reverseTaskListVuex']),
    reverseTaskList() {
      this.reverseTaskListVuex()
      this.sortByDate = !this.sortByDate
    }
  }
}
</script>

<style lang="scss" scoped>
.sortTaks {
  display: block;
  margin-left: auto;
}
</style>
