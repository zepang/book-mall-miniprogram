// miniprogram/pages/user/user.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    userInfo: {},
    loginInfo: {
      email: 'xxxx@xxxx.xxx',
      createdAt: 'YYYY-MM-DD'
    },
    isLogin: false,
    user: {}
  },
  /**
   * 组件的属性列表
   */
  properties: {
    avatarUrl: String,
    userInfo: Object
  },
  onLoad: function () {
    this.checkLoginStatus()
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  checkLoginStatus: function () {
    try {
      let id = wx.getStorageSync('_id')
      let db = wx.cloud.database()
      const self = this

      db.collection('users').doc(id).get().then(res => {
        res.data.createdAt = res.data.createdAt
        this.setData({
          isLogin: true,
          loginInfo: res.data
        })
      }).catch(e => {
        this.setData({
          isLogin: false
        })
      })

    } catch (e) {

    }
  },
  /**
 * 获取openid
 */
  onGetOpenid: function () {
    const self = this
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log(res)
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        self.setData({
          isLogin: true
        })
        self.register(res.result.openid)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },
  register: function (openid) {
    const db = wx.cloud.database()

    return db.collection('users').where({
      _openid: openid
    })
      .get()
      .then(res => {
        if (!res.data.length) {
          return db.collection('users').add({
            data: {
              createdAt: Date.now(),
              email: ''
            }
          }).then(res => {
            wx.setStorageSync('_id', res._id)
            return res
          }).catch(error => {
            console.log(error)
          })
        }
      })
  }
})