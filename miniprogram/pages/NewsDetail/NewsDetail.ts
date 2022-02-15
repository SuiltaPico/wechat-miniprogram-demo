import { NewsData } from "../../NewsData";

Page({
  data: {
    error: String,
    data: {
      content: String,
      title: String,
      cover: String,
      author_name: String,
      updated_at: String,
    },
  },

  onLoad: function (option) {
    let news_cache = wx.getStorageSync("news_cache");
    let news_cache_map: Map<string, NewsData> = new Map();

    if (news_cache) {
      news_cache = JSON.parse(news_cache);
      (news_cache as NewsData[]).forEach((news_data: NewsData) => {
        news_cache_map.set(news_data.post_id, news_data);
      });
    }

    let use_NewsData = (news_data: NewsData) => {
      this.setData({
        data: {
          // @ts-ignore
          title: news_data.title + "...",
          // @ts-ignore
          // 富文本组件通过常规方法无法控制，因此进行样式注入。
          content: news_data.content
            .replaceAll("<img", `<img style="width:100%"`)
            .replaceAll("<p", `<p style="margin-block-start: 1em;margin-block-end: 1em;"`)
            ,
          // @ts-ignore
          cover: news_data.cover,
          // @ts-ignore
          author_name: news_data.author_name,
          // @ts-ignore
          updated_at: news_data.updated_at,
        },
      });
    };

    if (!option.id) {
      // @ts-ignore
      this.setData({ error: "Error: option.id is undefined" });
    } 
    // 尝试读取缓存，没有则立即获取。
    else if (news_cache_map.has(option.id)) {
      use_NewsData(news_cache_map.get(option.id) as NewsData);
    } else {
      this.setData({
        data: {
          content: "加载中..." as any,
          title: "正在努力为您加载新闻..." as any,
          cover: "" as any,
          author_name: "" as any,
          updated_at: "" as any,
        },
      });
      wx.request({
        url: `https://unidemo.dcloud.net.cn/api/news/36kr/${option.id}`,
        success: (result) => {
          use_NewsData(result.data as NewsData);
        },
      });
    }
  },
});
