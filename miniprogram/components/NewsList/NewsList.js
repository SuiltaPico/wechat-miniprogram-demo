"use strict";
Component({
    properties: {},
    options: {
        styleIsolation: 'isolated'
    },
    data: {
        api_results: Array,
        error: String,
        loaded: Boolean,
    },
    methods: {},
    lifetimes: {
        created: function () {
            var _this = this;
            wx.request({
                url: "https://unidemo.dcloud.net.cn/api/news",
                success: function (result) {
                    _this.setData({
                        api_results: result.data,
                    });
                    wx.setStorage({
                        key: "news_cache",
                        data: JSON.stringify(result.data)
                    });
                },
                fail: function (reason) {
                    _this.setData({
                        error: reason.errMsg,
                    });
                },
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3c0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOZXdzTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFLEVBQUU7SUFFZCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsVUFBVTtLQUMzQjtJQUtELElBQUksRUFBRTtRQUNKLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLEtBQUssRUFBRSxNQUFNO1FBQ2IsTUFBTSxFQUFFLE9BQU87S0FDaEI7SUFLRCxPQUFPLEVBQUUsRUFBRTtJQUVYLFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBUDtZQUFBLGlCQWtCQztZQWpCQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSx3Q0FBd0M7Z0JBQzdDLE9BQU8sRUFBRSxVQUFDLE1BQU07b0JBQ2QsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQVc7cUJBQ2hDLENBQUMsQ0FBQztvQkFDSCxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUNaLEdBQUcsRUFBRSxZQUFZO3dCQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUNsQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxNQUFNO29CQUNYLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFhO3FCQUM1QixDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTmV3c0xpc3QvTmV3c0xpc3QuanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHt9LFxuXG4gIG9wdGlvbnM6IHtcbiAgICBzdHlsZUlzb2xhdGlvbjogJ2lzb2xhdGVkJ1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBhcGlfcmVzdWx0czogQXJyYXksXG4gICAgZXJyb3I6IFN0cmluZyxcbiAgICBsb2FkZWQ6IEJvb2xlYW4sXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge30sXG5cbiAgbGlmZXRpbWVzOiB7XG4gICAgY3JlYXRlZCgpIHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly91bmlkZW1vLmRjbG91ZC5uZXQuY24vYXBpL25ld3NcIixcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBhcGlfcmVzdWx0czogcmVzdWx0LmRhdGEgYXMgYW55LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAga2V5OiBcIm5ld3NfY2FjaGVcIixcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHJlc3VsdC5kYXRhKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChyZWFzb24pID0+IHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZXJyb3I6IHJlYXNvbi5lcnJNc2cgYXMgYW55LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuIl19