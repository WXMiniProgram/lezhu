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

    //确认要Ta帮忙
    letHelp:function(e){
        var self = this;
        var num = e.target.id;
        var curr = self.data.getHelpArray[num];
        wx.request({
            url: 'https://wechatapp.zhhhorizon.net/intl-console-web/user/confirmService',
            header:{
                "contentType":"application/json",
                "dataType":"json"
            },
            data: {
                taskId: curr.taskId ,
            },
            method:"POST",
            success: function(resp) {
                if (resp.data.resp){
                    if (resp.data.respCode==0){
                        wx.showToast({
                            title: "已确认要Ta帮忙!",
                            icon: 'success',
                            duration: 2000
                        });
                    }
                    else if (resp.data.respCode==1){
                        wx.showModal({
                            title: '提示',
                            content: '确认失败',
                            success: function(res) {
                                if (res.confirm) {
                                    console.log('用户点击确定')
                                }
                            }
                        });
                    }
                }
                else{
                    wx.showToast({
                        title: '已确认要Ta帮忙!',
                        icon: 'success',
                        duration: 2000,
                        success:function(){
                            self.mockProcessInfo(num);
                        }
                    });
                }
                
            },
            fail:function(resp){
                wx.showToast({
                    title: '已确认要Ta帮忙!',
                    icon: 'success',
                    duration: 2000,
                    success:function(){
                        self.mockProcessInfo(num);
                    }
                });
            }
        });
    },

    //mockConfirm
    mockProcessInfo:function(num){
        var self = this;
        app.mockGetHelpArray[num].processInfo = 2;
        self.setData({
            getHelpArray:app.mockGetHelpArray
        });
    },

    //确认已经完成了帮助
    confirmFinish:function(e){
        var self = this;
        var num = e.target.id;
        var curr = self.data.getHelpArray[num];
        var point = curr.srvCost;
        wx.request({
            url: 'https://wechatapp.zhhhorizon.net/intl-console-web/user/confirmServiceComplete',
            header:{
                "contentType":"application/json",
                "dataType":"json"
            },
            data: {
                taskId: curr.taskId ,
            },
            method:"POST",
            success: function(resp) {
                if (resp.data.resp){
                    if (resp.data.respCode==0){
                        wx.showToast({
                            title: '帮助已完成，悬赏已送Ta!',
                            icon: 'success',
                            duration: 2000
                        });
                    }
                    else if (resp.data.respCode==1){
                        wx.showModal({
                            title: '提示',
                            content: '确认失败',
                            success: function(res) {
                                if (res.confirm) {
                                    console.log('用户点击确定')
                                }
                            }
                        });
                    }
                }
                else{
                    wx.showToast({
                        title: '帮助已完成，悬赏已送Ta!',
                        icon: 'success',
                        duration: 2000,
                        success:function(){
                            self.mockProcessInfoComplete(num,point);
                        }
                    });
                }
                
            },
            fail:function(resp){
                wx.showToast({
                    title: '帮助已完成，悬赏已送Ta!',
                    icon: 'success',
                    duration: 2000,
                    success:function(){
                        self.mockProcessInfoComplete(num,point);
                    }
                });
            }
        });
    },

    //mockComplete
    mockProcessInfoComplete:function(num,point){
        var self = this;
        app.mockGetHelpArray[num].processInfo = 3;
        app.mockUserInfo.usePoint -= point;
        self.setData({
            getHelpArray:app.mockGetHelpArray
        });
    },
})