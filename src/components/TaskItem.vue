<template>
  <div
    class="task-item mt-3 bg-slate-200 rounded px-3 py-2"
    :class="{ done }"
    :data-count="key"
  >
    <button class="done-btn" :class="{ done }" @click="done = !done">
      <fa icon="square-check"></fa>
    </button>
    <input
      class="editInput rounded"
      :disabled="!editable"
      :value="task"
      @blur="curVal = $event.target.value"
    />

    <button class="task-item-edit" @click="editable = !editable">
      <fa v-if="editable" icon="check"></fa>
      <fa v-else icon="pen-to-square"></fa>
    </button>
    <button class="task-item-del" @click="removeTask">
      <fa icon="trash-arrow-up"></fa>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['task', 'index'],
  data() {
    return {
      editable: false,
      curVal: this.task,
      done: false
    }
  },
  methods: {
    removeTask() {
      this.$emit('removeTask', this.task)
    }
  },
  watch: {
    editable() {
      if (this.editable) return false
      if (!this.curVal) {
        alert('Заполните поле')
        return false
      }
      this.$emit('editTask', [this.index, this.curVal])
    }
  }
}
</script>

<style lang="sass" scoped>

.task-item
  position: relative
  padding-right: 60px
  padding-left: 40px
  transition: all .3s ease
  &::before
    content: ""
    width: 0
    height: 2px
    background: #1f2937
    transition: all .2s ease
    position: absolute
    top: calc(56% - 1px)
    border-radius: 2px
    left: 40px
    z-index: 10
  &.done
    color: theme('colors.gray.500')
    &::before
      width: 86.1%
      background: theme('colors.gray.500')

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
    outline: none
    color: theme('colors.gray.800')
  &-del
    right: 10px
    &:hover,
    &:focus
      color: rgb(239 68 68)
  &-edit
    right: 35px
    &:hover,
    &:focus
      color: rgb(8 145 178)

.editInput
  width: 100%
  padding: 0
  transition: all .2s ease
  outline: none
  &:focus
    box-shadow: 0 0 0 1px #333 inset
  &:not([disabled])
    padding: 0 10px

.done-btn
  width: 16px
  height: 16px
  display: flex
  align-items: center
  justify-content: center
  color: theme('colors.gray.800')
  border: 2.5px solid theme('colors.gray.500')
  border-radius: 3px
  position: absolute
  top: calc(50% - 7px)
  left: 10px
  transition: all .2s ease
  svg
    opacity: 0
    transition: all .2s ease
  &.done
    border-color: transparent
    svg
      opacity: 1
</style>
