var app = getApp();
Page({
    data: {
        getHelpArray:[]
    },

    onReady: function () {
        this.fetchData();
    },

    //获取数据
    fetchData:function(){
        var self = this;
        wx.request({
            url: 'https://wechatapp.zhhhorizon.net/intl-console-web/user/searchMyNeed',
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
                        getHelpArray:resp.data
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
            getHelpArray:app.mockGetHelpArray
        });
    },
})