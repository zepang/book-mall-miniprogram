// components/tabs/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  relations: {
    '../tab/index': {
      type: 'child',
      linked: function (child) {
        this.children.push(child)
        this.updateTabs(child.data)
        this.setActiveTab()
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [],
  },

  created: function () {
    this.children = []
  },

  attached: function () {
    // console.log(this.tabs)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChangeTab: function (e) {
      const data = e.target.dataset
      this.setData({
        active: data.index
      }, function () {
        this.setActiveTab()
      })
    },
    setActiveTab: function () {
      this.children.forEach((child, index) => {
        let active = false
        if (index === this.data.active) {
          active = true
        }
        child.setData({ active })
      })
      console.log(this.children);
    },
    updateTabs: function (tab) {
      this.setData({
        tabs: this.data.tabs.concat(tab)
      })
    }
  }
})
