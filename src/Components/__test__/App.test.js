import React from 'react'
import { shallow } from "enzyme";
import App from '../App'

describe("App.js组件测试", () => {
  let wrapper = shallow(<App />)
  it('匹配snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})
