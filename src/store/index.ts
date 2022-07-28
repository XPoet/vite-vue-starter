import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', () => {
  // state(ref)
  const msg = ref<string>('Hello Pinia')
  const count = ref<number>(0)

  // getters(computed)
  const doubleCount = computed(() => {
    return count.value * 2
  })

  // actions(function)
  const increment = () => {
    count.value++
  }

  return {
    msg, count, doubleCount, increment
  }
})