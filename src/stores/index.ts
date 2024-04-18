import {  defineStore } from 'pinia'

// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  return { count, doubleCount, increment }
})
