// components/tab/index.js
Component({
  relations: {
    '../tabs/index': {
      type: 'parent'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
