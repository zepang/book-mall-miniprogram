Component({
  properties: {
    selected: {
      type: Number,
      value: 0
    }
  },
  data: {
    list: [
      {
        "pagePath": "/pages/home/home",
        "icon": "todo-list-o",
        "selectedIcon": "todo-list"
      },
      {
        "pagePath": "/pages/index/index",
        "icon": "hot-o",
        "selectedIcon": "hot"
      },
      {
        "pagePath": "/pages/chooseLib/chooseLib",
        "icon": "manager-o",
        "selectedIcon": "manager"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      this.triggerEvent('switch-tab', data.index)
    }
  }
})
