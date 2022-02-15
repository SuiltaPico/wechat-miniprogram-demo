"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        var _this = this;
        var news_cache = wx.getStorageSync("news_cache");
        var news_cache_map = new Map();
        if (news_cache) {
            news_cache = JSON.parse(news_cache);
            news_cache.forEach(function (news_data) {
                news_cache_map.set(news_data.post_id, news_data);
            });
        }
        var use_NewsData = function (news_data) {
            _this.setData({
                data: {
                    title: news_data.title + "...",
                    content: news_data.content
                        .replaceAll("<img", "<img style=\"width:100%\"")
                        .replaceAll("<p", "<p style=\"margin-block-start: 1em;margin-block-end: 1em;\""),
                    cover: news_data.cover,
                    author_name: news_data.author_name,
                    updated_at: news_data.updated_at,
                },
            });
        };
        if (!option.id) {
            this.setData({ error: "Error: option.id is undefined" });
        }
        else if (news_cache_map.has(option.id)) {
            use_NewsData(news_cache_map.get(option.id));
        }
        else {
            this.setData({
                data: {
                    content: "加载中...",
                    title: "正在努力为您加载新闻...",
                    cover: "",
                    author_name: "",
                    updated_at: "",
                },
            });
            wx.request({
                url: "https://unidemo.dcloud.net.cn/api/news/36kr/" + option.id,
                success: function (result) {
                    use_NewsData(result.data);
                },
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3c0RldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5ld3NEZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRTtZQUNKLE9BQU8sRUFBRSxNQUFNO1lBQ2YsS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsTUFBTTtZQUNiLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFVBQVUsRUFBRSxNQUFNO1NBQ25CO0tBQ0Y7SUFFRCxNQUFNLEVBQUUsVUFBVSxNQUFNO1FBQWhCLGlCQXdEUDtRQXZEQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUksY0FBYyxHQUEwQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXRELElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsVUFBeUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFtQjtnQkFDckQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFlBQVksR0FBRyxVQUFDLFNBQW1CO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxFQUFFO29CQUVKLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUs7b0JBRzlCLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTzt5QkFDdkIsVUFBVSxDQUFDLE1BQU0sRUFBRSwyQkFBeUIsQ0FBQzt5QkFDN0MsVUFBVSxDQUFDLElBQUksRUFBRSw2REFBMkQsQ0FBQztvQkFHaEYsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO29CQUV0QixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVc7b0JBRWxDLFVBQVUsRUFBRSxTQUFTLENBQUMsVUFBVTtpQkFDakM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUVkLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO2FBRUksSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0QyxZQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFhLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLFFBQWU7b0JBQ3hCLEtBQUssRUFBRSxlQUFzQjtvQkFDN0IsS0FBSyxFQUFFLEVBQVM7b0JBQ2hCLFdBQVcsRUFBRSxFQUFTO29CQUN0QixVQUFVLEVBQUUsRUFBUztpQkFDdEI7YUFDRixDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxpREFBK0MsTUFBTSxDQUFDLEVBQUk7Z0JBQy9ELE9BQU8sRUFBRSxVQUFDLE1BQU07b0JBQ2QsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFnQixDQUFDLENBQUM7Z0JBQ3hDLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXdzRGF0YSB9IGZyb20gXCIuLi8uLi9OZXdzRGF0YVwiO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGVycm9yOiBTdHJpbmcsXG4gICAgZGF0YToge1xuICAgICAgY29udGVudDogU3RyaW5nLFxuICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgIGNvdmVyOiBTdHJpbmcsXG4gICAgICBhdXRob3JfbmFtZTogU3RyaW5nLFxuICAgICAgdXBkYXRlZF9hdDogU3RyaW5nLFxuICAgIH0sXG4gIH0sXG5cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgbGV0IG5ld3NfY2FjaGUgPSB3eC5nZXRTdG9yYWdlU3luYyhcIm5ld3NfY2FjaGVcIik7XG4gICAgbGV0IG5ld3NfY2FjaGVfbWFwOiBNYXA8c3RyaW5nLCBOZXdzRGF0YT4gPSBuZXcgTWFwKCk7XG5cbiAgICBpZiAobmV3c19jYWNoZSkge1xuICAgICAgbmV3c19jYWNoZSA9IEpTT04ucGFyc2UobmV3c19jYWNoZSk7XG4gICAgICAobmV3c19jYWNoZSBhcyBOZXdzRGF0YVtdKS5mb3JFYWNoKChuZXdzX2RhdGE6IE5ld3NEYXRhKSA9PiB7XG4gICAgICAgIG5ld3NfY2FjaGVfbWFwLnNldChuZXdzX2RhdGEucG9zdF9pZCwgbmV3c19kYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCB1c2VfTmV3c0RhdGEgPSAobmV3c19kYXRhOiBOZXdzRGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB0aXRsZTogbmV3c19kYXRhLnRpdGxlICsgXCIuLi5cIixcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgLy8g5a+M5paH5pys57uE5Lu26YCa6L+H5bi46KeE5pa55rOV5peg5rOV5o6n5Yi277yM5Zug5q2k6L+b6KGM5qC35byP5rOo5YWl44CCXG4gICAgICAgICAgY29udGVudDogbmV3c19kYXRhLmNvbnRlbnRcbiAgICAgICAgICAgIC5yZXBsYWNlQWxsKFwiPGltZ1wiLCBgPGltZyBzdHlsZT1cIndpZHRoOjEwMCVcImApXG4gICAgICAgICAgICAucmVwbGFjZUFsbChcIjxwXCIsIGA8cCBzdHlsZT1cIm1hcmdpbi1ibG9jay1zdGFydDogMWVtO21hcmdpbi1ibG9jay1lbmQ6IDFlbTtcImApXG4gICAgICAgICAgICAsXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNvdmVyOiBuZXdzX2RhdGEuY292ZXIsXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGF1dGhvcl9uYW1lOiBuZXdzX2RhdGEuYXV0aG9yX25hbWUsXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ld3NfZGF0YS51cGRhdGVkX2F0LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICghb3B0aW9uLmlkKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnNldERhdGEoeyBlcnJvcjogXCJFcnJvcjogb3B0aW9uLmlkIGlzIHVuZGVmaW5lZFwiIH0pO1xuICAgIH0gXG4gICAgLy8g5bCd6K+V6K+75Y+W57yT5a2Y77yM5rKh5pyJ5YiZ56uL5Y2z6I635Y+W44CCXG4gICAgZWxzZSBpZiAobmV3c19jYWNoZV9tYXAuaGFzKG9wdGlvbi5pZCkpIHtcbiAgICAgIHVzZV9OZXdzRGF0YShuZXdzX2NhY2hlX21hcC5nZXQob3B0aW9uLmlkKSBhcyBOZXdzRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb250ZW50OiBcIuWKoOi9veS4rS4uLlwiIGFzIGFueSxcbiAgICAgICAgICB0aXRsZTogXCLmraPlnKjliqrlipvkuLrmgqjliqDovb3mlrDpl7suLi5cIiBhcyBhbnksXG4gICAgICAgICAgY292ZXI6IFwiXCIgYXMgYW55LFxuICAgICAgICAgIGF1dGhvcl9uYW1lOiBcIlwiIGFzIGFueSxcbiAgICAgICAgICB1cGRhdGVkX2F0OiBcIlwiIGFzIGFueSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vdW5pZGVtby5kY2xvdWQubmV0LmNuL2FwaS9uZXdzLzM2a3IvJHtvcHRpb24uaWR9YCxcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHVzZV9OZXdzRGF0YShyZXN1bHQuZGF0YSBhcyBOZXdzRGF0YSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG59KTtcbiJdfQ==