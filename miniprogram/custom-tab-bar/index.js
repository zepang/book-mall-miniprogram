Component({
  data: {
    selected: 1,
    list: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/Nav-2.png",
        "selectedIconPath": "/images/Nav-2_active.png"
      },
      {
        "pagePath": "/pages/home/home",
        "iconPath": "/images/Nav-1.png",
        "selectedIconPath": "/images/Nav-1_active.png"
      },
      {
        "pagePath": "/pages/chooseLib/chooseLib",
        "iconPath": "/images/Nav-3.png",
        "selectedIconPath": "/images/Nav-3_active.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
