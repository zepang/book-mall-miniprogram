// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    url: {
      logo: '../../images/Logo.png',
      notification: '../../images/Notifications.png',
      message: '../../images/Messages.png',
    },
    list: [
      { 
        id: 1,
        user: {
          name: 'Profile name',
          avatar: '../../images/avatar.png'
        },
        content: {
          title: 'White Wine Toffee',
          cover: '../../images/feed-card-cover.png',
          desc: 'Apparently we had reached a great height in the atmosphere, for the sky was …'
        },
        meta: {
          like: {
            count: 5, 
            icon: '../../../../../images/Like.png'
          },
          comments: 8,
          publishedAt: '5 day ago'
        }
      },
      { 
        id: 2,
        user: {
          name: 'Profile name',
          avatar: '../../images/avatar.png'
        },
        content: {
          title: 'White Wine Toffee',
          cover: '../../images/feed-card-cover.png',
          desc: 'Apparently we had reached a great height in the atmosphere, for the sky was …'
        },
        meta: {
          like: {
            count: 5, 
            icon: '../../../../../images/Like.png'
          },
          comments: 8,
          publishedAt: '5 day ago'
        }
      },
      { 
        id: 3,
        user: {
          name: 'Profile name',
          avatar: '../../images/avatar.png'
        },
        content: {
          title: 'White Wine Toffee',
          cover: '../../images/feed-card-cover.png',
          desc: 'Apparently we had reached a great height in the atmosphere, for the sky was …'
        },
        meta: {
          like: {
            count: 5, 
            icon: '../../../../../images/Like.png'
          },
          comments: 8,
          publishedAt: '5 day ago'
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        } else {
          console.log('aaa')
          wx.authorize({
            scope: 'scope.userInfo',
            success: res => {
              console.log(res)
            },
            fail: error => {
              console.log(error)
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.getTabBar)
  },  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 自定义事件
   */
  switchTab: function (data) {
    this.setData({
      tabIndex: data.detail
    })
  }
})

