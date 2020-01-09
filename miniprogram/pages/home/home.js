// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '全部商品', value: 0 },
      { text: '推荐书籍', value: 1 },
      { text: '查看最多', value: 2 }
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '创建时间', value: 'b' },
      { text: '发布时间', value: 'c' }
    ],
    value1: 0,
    value2: 'a',
    isLoading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * scrolle-view下拉加载更多
   */
  onScrollToLower: function (event) {
    console.log(event)
    this.setData({
      isLoading: true
    })
    let timer = setTimeout(() => {
      this.setData({
        isLoading: false
      })
    }, 2000)
  }
})