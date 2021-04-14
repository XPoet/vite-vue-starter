<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex',

  setup() {
    const count = ref<number>(0)

    const add = () => {
      count.value += 1
    }

    return {
      count,
      add
    }
  }
})
</script>

<style scoped lang="stylus"></style>
