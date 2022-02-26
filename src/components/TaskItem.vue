<template>
  <div class="task-item mt-3 bg-slate-200 rounded px-3 py-2" :data-count="key">
    <input :disabled="!editable" :value="task" />

    <button class="task-item-del" @click="removeTask">
      <fa icon="trash-arrow-up"></fa>
    </button>
    <button class="task-item-edit" @click="editable = !editable">
      <fa v-if="editable" icon="check"></fa>
      <fa v-else icon="pen-to-square"></fa>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task', 'index'],
  data() {
    return {
      editable: false
    }
  },
  methods: {
    removeTask($event) {
      this.$emit('removeTask', this.task)
    }
  }
}
</script>

<style lang="sass" scoped>

.task-item
  position: relative
  padding-right: 35px
  transition: all .3s ease
  &-del,
  &-edit
    width: 16px
    height: 16px
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    top: calc(50% - 7px)
    cursor: pointer
    transition: all .3s ease

  &-del
    right: 10px
    &:hover
      color: rgb(239 68 68)
  &-edit
    right: 35px
    &:hover
      color: rgb(8 145 178)
</style>
