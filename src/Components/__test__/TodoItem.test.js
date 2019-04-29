import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

const props = {
  type:"todo",
  content: "this is a todoItem",
  index: 1,
  addDoneItem: jest.fn()
}

describe('测试todoItem和doneItem', () => {
  let wrapper = shallow(<TodoItem {...props}/>)
  it('匹配snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("正确地展示内容", () => {
    expect(wrapper.find('.content').text()).toEqual('this is a todoItem')
    expect(wrapper.instance().props.index).toEqual(1)
  })
  it('点击按钮触发函数', () => {
    wrapper.find('button').simulate('click')
    expect(props.addDoneItem).toHaveBeenCalledWith(1)
  })
})
