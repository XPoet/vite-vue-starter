import { mount } from '@vue/test-utils'
// @ts-ignore
import Header from '../src/components/Headr.vue'

describe('Header.vue', () => {
  it('renders', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toContain('Vite2.x + Vue3.x + TypeScript Starter')
  })
})
