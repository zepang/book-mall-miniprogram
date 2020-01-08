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
    /**
     * 删除订阅清单的书籍
     */
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
    },
    /**
     * 订阅清单书籍
     * 1. 检查是否配置邮箱，不存在则提示用户进行绑定邮箱
     * 2. 请求检查用户积分，积分目前是每周刷新，一周有3积分，后期可以通过其他方式获取，比如博客活跃度
     */
    subscribe: function (event) {
      
    }
  }
})
