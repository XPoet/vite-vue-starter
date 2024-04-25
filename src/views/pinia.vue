<script setup lang="ts">
import { useCounterStore } from '@/stores'

defineOptions({
  name: 'Pinia'
})

const store = useCounterStore()
</script>

<template>
  <h1>Pinia</h1>
  <div>count: {{ store.count }}</div>
  <div>doubleCount: {{ store.doubleCount }}</div>

  <button @click="store.increment">+1</button>
</template>

<style scoped></style>
