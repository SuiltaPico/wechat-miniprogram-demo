// components/NewsList/NewsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  options: {
    styleIsolation: 'isolated'
  },

  /**
   * 组件的初始数据
   */
  data: {
    api_results: Array,
    error: String,
    loaded: Boolean,
  },

  /**
   * 组件的方法列表
   */
  methods: {},

  lifetimes: {
    created() {
      wx.request({
        url: "https://unidemo.dcloud.net.cn/api/news",
        success: (result) => {
          this.setData({
            api_results: result.data as any,
          });
          wx.setStorage({
            key: "news_cache",
            data: JSON.stringify(result.data)
          })
        },
        fail: (reason) => {
          this.setData({
            error: reason.errMsg as any,
          });
        },
      });
    },
  },
});
