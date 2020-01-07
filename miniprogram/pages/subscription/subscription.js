// pages/subscription/subscription.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    subscription: []
  },

  lifetimes: {
    attached: function () {
      this.getSubscription()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSubscription: function () {
      try {
        let list = wx.getStorageSync('subscription')
        if (list) {
          list = JSON.parse(list)
          this.setData({
            subscription: list
          })
        }
      } catch (e) {

      }
    },
    deleteSubscription: function (event) {
      let id = event.currentTarget.dataset.id
      let subscription = this.data.subscription.filter(item => item.id !== id)

      try {
        wx.setStorageSync('subscription', subscription)
        this.setData({
          subscription: subscription
        })
      } catch (e) {

      }
    }
  }
})
