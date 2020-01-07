// miniprogram/pages/book-detail/book-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSubscribed: false,
    subscription: [],
    recommends: [],
    book: {
      id: 1,
      name: 'Java All-in-One For Dummies, 3rd Edition, 3rd Edition',
      author: 'Doug Lowe',
      updatedAt: '2019-10-22',
      tags: ['computer', 'technology'],
      description: '<div class="card-body"><p>< strong > Eight handy minibooks cover just what programmers need to get going with Java 7</strong></p><p>The newest release of Java has more robust functionality to help web and mobile developers get the most ouf of this platform-independent programming language. Like its bestselling previous editions, <em>Java All-in-One For Dummies, 3rd Edition</em>has what you need to get up and running quickly with the new version. Covering the enhanced mobile development and syntax features as well as programming improvements, this guide makes it easy to find what you want and put it to use.</p><ul><li>Focuses on the vital information that enables you to get up and running quickly on the new version</li><li>Covers the enhanced multimedia features as well as programming enhancements, Java and XML, Swing, server-side Java, Eclipse, and more</li><li>Minibooks cover Java basics; programming basics; strings, arrays, and collections; programming techniques; Swing; Web programming; files and databases; and a "fun and games" category</li></ul><p>Rather than trying to cover every aspect of this massive topic, <em>Java All-in-One For Dummies, 3rd Edition</em>focuses on the practical information you need to become productive with Java 7 right away.</p></div>'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
    let book = {
      id: 1,
      name: 'Java All-in-One For Dummies, 3rd Edition',
      author: 'author of book',
      updatedAt: '2019-10-22',
      view: 123
    }

    this.setData({
      recommends: [book, book, book, book, book]
    })
    this.checkSubscription()
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
   * 简单当前书籍是否存在订阅清单中
   */
  checkSubscription: function () {
    try {
      let list = wx.getStorageSync('subscription')
      if (list) {
        list = JSON.parse(list)
        this.setData({
          subscription: list,
          isSubscribed: list.some(item => item.id === this.data.book.id)
        })
      }
    } catch (e) {

    }
  },
  /**
   * 加入订阅清单
   */
  subscribe: function () {
    let book = {}
    for (let key in this.data.book) {
      if (key !== 'description') {
        book[key] = this.data.book[key]
      }
    }

    console.log(this)

    this.setData({
      subscription: this.data.subscription.concat([book])
    })

    try {
      wx.setStorageSync('subscription', JSON.stringify(this.data.subscription))
      this.setData({
        isSubscribed: true
      })
    } catch (e) {

    }
  }
})