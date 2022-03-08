<template>
  <div
    class="task-item mt-2 bg-slate-200 rounded px-3 py-2"
    :class="{ done: classes }"
    :data-count="key"
  >
    <button class="done-btn" :class="{ done: classes }" @click="changeDone">
      <fa icon="square-check"></fa>
    </button>

    <input
      class="editInput rounded"
      :disabled="!editable"
      :value="task"
      @blur="curVal = $event.target.value"
    />

    <button
      class="task-item-edit"
      :disabled="classes"
      @click="editable = !editable"
    >
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
  props: ['task', 'index', 'classes'],
  data() {
    return {
      editable: false,
      curVal: this.task,
      done: JSON.parse(localStorage.tasks)[this.index].done || false
    }
  },
  methods: {
    removeTask() {
      this.$emit('removeTask', this.task)
    },
    changeDone() {
      this.done = !this.done
      this.$emit('changeDone', [this.index, this.done])
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
  @media (max-width: 767px)
    height: 50px
    display: flex
    align-content: center

  &::before
    content: ""
    width: 0
    height: 2px
    background: #1f2937
    transition: all .2s ease
    position: absolute
    top: calc(50% - 1px)
    border-radius: 2px
    left: 40px
    z-index: 10

  &.done
    color: theme('colors.gray.500')
    &::before
      // width: 86.1%
      width: calc(100% - 105px)
      background: theme('colors.gray.500')

    .task-item-edit
      color: theme('colors.gray.500')
      cursor: auto

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
    svg
      width: 100%
      height: 100%
    @media (max-width: 767px)
      width: 20px
      height: 20px
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
  padding: 0
  width: 99.5%
  background: transparent
  transition: all .2s ease
  outline: none
  &:focus
    box-shadow: 0 0 0 1px #333 inset
  &:not([disabled])
    padding: 0 10px
    background: #fff

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
  @media (max-width: 767px)
    width: 20px
    height: 20px
    top: calc(50% - 10px)
  svg
    opacity: 0
    transition: all .2s ease
    width: 160%
    height: 160%
  &.done
    border-color: transparent
    svg
      opacity: 1
</style>
