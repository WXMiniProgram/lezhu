var app = getApp();
Page({
    data: {
        toHelpArray:[]
    },

    onReady: function () {
        this.fetchData();
    },

    //获取数据
    fetchData:function(){
        var self = this;
        wx.request({
            url: 'https://wechatapp.zhhhorizon.net/intl-console-web/user/searchMyService',
            header:{
                "contentType":"application/json",
                "dataType":"json"
            },
            data: {
                openId: 'userId' ,
            },
            method:"POST",
            success: function(resp) {
                if (typeof resp.data == Array){
                    self.setData({
                        toHelpArray:resp.data
                    });
                }
                else{
                    self.doMock();
                }
            },
            fail:function(resp){
                self.doMock();
            }
        });
    },

    doMock:function(){
        this.setData({
            toHelpArray:app.mockToHelpArray
        });
    },
})