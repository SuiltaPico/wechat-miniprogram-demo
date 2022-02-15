"use strict";
Component({
    properties: {
        news_info: {
            type: Object,
            value: {},
        },
    },
    options: {
        styleIsolation: "isolated",
    },
    data: {},
    methods: {
        onContainerTap: function () {
            wx.navigateTo({
                url: "/pages/NewsDetail/NewsDetail?" +
                    ["id=" + this.properties.news_info.post_id].join("&"),
            });
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3c0l0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOZXdzSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFFRCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsVUFBVTtLQUMzQjtJQUtELElBQUksRUFBRSxFQUFFO0lBS1IsT0FBTyxFQUFFO1FBQ1AsY0FBYztZQUNaLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUNELCtCQUErQjtvQkFDL0IsQ0FBQyxRQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDeEQsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIG5ld3NfaW5mbzoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IHt9LFxuICAgIH0sXG4gIH0sXG5cbiAgb3B0aW9uczoge1xuICAgIHN0eWxlSXNvbGF0aW9uOiBcImlzb2xhdGVkXCIsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge30sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIG9uQ29udGFpbmVyVGFwKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDpcbiAgICAgICAgICBcIi9wYWdlcy9OZXdzRGV0YWlsL05ld3NEZXRhaWw/XCIgK1xuICAgICAgICAgIFtgaWQ9JHt0aGlzLnByb3BlcnRpZXMubmV3c19pbmZvLnBvc3RfaWR9YF0uam9pbihcIiZcIiksXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG4iXX0=