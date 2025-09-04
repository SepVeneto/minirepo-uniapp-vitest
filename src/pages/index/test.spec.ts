import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import IndexPage from './index.vue'

describe('IndexPage', () => {
  it('应该正确渲染页面', () => {
    const wrapper = mount(IndexPage)
    expect(wrapper.exists()).toBe(true)
  })

  it('应该显示默认标题"Hello"', () => {
    const wrapper = mount(IndexPage)
    const titleElement = wrapper.find('.title')
    expect(titleElement.text()).toBe('Hello')
  })

  it('应该渲染logo图片', () => {
    const wrapper = mount(IndexPage)
    const logoElement = wrapper.find('.logo')
    expect(logoElement.exists()).toBe(true)
    expect(logoElement.attributes('src')).toBe('/static/logo.png')
  })

  it('应该应用正确的样式类', () => {
    const wrapper = mount(IndexPage)
    expect(wrapper.find('.content').exists()).toBe(true)
    expect(wrapper.find('.text-area').exists()).toBe(true)
    expect(wrapper.find('.title').exists()).toBe(true)
  })
})
