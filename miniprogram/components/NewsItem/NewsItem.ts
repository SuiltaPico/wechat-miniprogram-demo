Component({
  /**
   * 组件的属性列表
   */
  properties: {
    news_info: {
      type: Object,
      value: {},
    },
  },

  options: {
    styleIsolation: "isolated",
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onContainerTap() {
      wx.navigateTo({
        url:
          "/pages/NewsDetail/NewsDetail?" +
          [`id=${this.properties.news_info.post_id}`].join("&"),
      });
    },
  },
});
