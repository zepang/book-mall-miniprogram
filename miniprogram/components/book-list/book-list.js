// components/book-list/book-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的生命周期
   */
  lifetimes: {
    attached: function () {
      let book = {
        name: 'name of book',
        author: 'author of book',
        updatedAt: '2019-10-22',
        view: 123
      }

      this.setData({
        list: [book, book, book, book, book]
      }) 
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 跳转至详情页面
     */
    navToDetail: function (event) {
      let id = event.currentTarget.dataset.name
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?id=${id}`
      })
    }
  }
})
