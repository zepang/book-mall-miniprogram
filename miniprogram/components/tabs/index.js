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
    },
    animated: {
      type: Boolean,
      value: true
    },
    duration: {
      type: Number,
      value: 250
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs: [],
    slideWrapperStyle: '',
    tabsBodyRect: {}
  },

  created: function () {
    this.children = []
  },

  attached: function () {
    // console.log(this.tabs)
  },

  ready: function () {
    this.getTabsBodyStyle().then(() => this.setSlideWrapperStyle())
  },

  pageLifetimes: {
    resize: function () {
      this.getTabsBodyStyle().then(() => this.setSlideWrapperStyle())
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getRect: function (selector) {
      return new Promise(resolve => {
        let query = wx.createSelectorQuery().in(this)
        query.select(selector).boundingClientRect(rect => resolve(rect)).exec()
      })
    },
    getTabsBodyStyle: function () {
      if (!this.data.animated) return
      return this.getRect('.tabs .body').then(rect => {
        this.setData({
          tabsBodyRect: rect
        })
        return rect
      })
    },
    setSlideWrapperStyle: function (active) {
      active = active || this.data.active
      let width = this.data.tabsBodyRect.width
      console.log(active)
      this.setData({
        slideWrapperStyle: `
          width: ${ width * this.children.length}px;
          transform: translateX(${-1 * active * width}px);
          transition: transform ${this.data.duration}ms ease-out;
        `
      })
      this.children.forEach(child => {
        child.setData({
          width: width + 'px'
        })
      })
    },
    handleChangeTab: function (e) {
      const data = e.target.dataset
      this.setData({
        active: data.index
      }, function () {
        this.setActiveTab()
        this.setSlideWrapperStyle(data.index)
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
    },
    updateTabs: function (tab) {
      this.setData({
        tabs: this.data.tabs.concat(tab)
      })
    }
  }
})
