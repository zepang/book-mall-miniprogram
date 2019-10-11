// components/recipes/index.js
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
    list: [
      {
        id: 1,
        user: {
          name: 'Profile name',
          avatar: '/images/avatar.png'
        },
        content: {
          title: 'White Wine Toffee',
          cover: '/images/feed-card-cover.png',
          desc: 'Apparently we had reached a great height in the atmosphere, for the sky was …'
        },
        meta: {
          like: {
            count: 5,
            icon: '/images/Like.png'
          },
          comments: 8,
          publishedAt: '5 day ago'
        }
      },
      {
        id: 2,
        user: {
          name: 'Profile name',
          avatar: '/images/avatar.png'
        },
        content: {
          title: 'White Wine Toffee',
          cover: '/images/feed-card-cover.png',
          desc: 'Apparently we had reached a great height in the atmosphere, for the sky was …'
        },
        meta: {
          like: {
            count: 5,
            icon: '/images/Like.png'
          },
          comments: 8,
          publishedAt: '5 day ago'
        }
      },
      {
        id: 3,
        user: {
          name: 'Profile name',
          avatar: '/images/avatar.png'
        },
        content: {
          title: 'White Wine Toffee',
          cover: '/images/feed-card-cover.png',
          desc: 'Apparently we had reached a great height in the atmosphere, for the sky was …'
        },
        meta: {
          like: {
            count: 5,
            icon: '/images/Like.png'
          },
          comments: 8,
          publishedAt: '5 day ago'
        }
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
