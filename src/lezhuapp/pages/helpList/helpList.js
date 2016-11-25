var app=getApp();
Page(
  {
  data: {
    wxUserInfo:null,
    latitudeCur:null,
    longitudeCur:null,
    typedata: "全部",
    urgent:false,
    index: 0,
    typearray: ['全部','紧急','拼车','取快递','带文件','租房','健身指导', '其他'],
    array: [],
    hintFlag:true
  },

  openMap: function(e) {
    var infoObj=e.currentTarget.dataset;
    app.mapData.latitude=Number(infoObj.latitude);
    app.mapData.longitude=Number(infoObj.longitude);
    app.mapData.location=infoObj.location;
    app.mapData.nickName=infoObj.nickname;
    app.mapData.headIcon=infoObj.headicon;
    app.mapData.payScore=infoObj.payscore;
    app.mapData.title=infoObj.title;
    app.mapData.content=infoObj.content;
    app.mapData.taskId= infoObj.taskid;
    wx.navigateTo({
      url: '../helpDetail/helpDetail'
    })
  },
bindPickerChange: function(e) {
    var that = this;
    var i=e.detail.value; 
    that.setData({
      index: i,
      typedata:that.data.typearray[i]
    });
    if(i==1){
      if(this.data.typedata=="紧急"){
          this.sendReq("全部",ture);
      }
      else{
          this.sendReq(this.data.typedata,ture);
      }
    }
    else{
      this.sendReq(this.data.typedata,false);
    }
},

  sendReq:function(type,urgent){
    //发送请求
    var that = this;
    var reqData={};
    reqData.uesrId=that.data.wxUserInfo.nickName;
    reqData.longitude=that.data.longitudeCur;
    reqData.latitude=that.data.latitudeCur;
    reqData.svrType=type;
    reqData.urgent=urgent;
    console.log("reqData")
    console.log(reqData)

    wx.request({
    url: 'https://wechatapp.zhhhorizon.net/intl-console-web/user/searchServiceNeeded', //接口地址
    data: reqData,
    method:"POST",
    header: {
        'content-type': 'application/json',
        "dataType":"json"
    },
    success: function(res) {
        if (res.data.length == 0){
              that.setData({
                  hintFlag:false
              });
        }
        else{
            that.setData({
                array:res.data
            });
        }
    },
    fail: function() {
        that.setData({
          array:app.mockHelpList
        });
    }
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //获取用户信息
     var that = this;
    app.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                wxUserInfo:userInfo
            });
            that.theckFlag();
        })
    //定位
  wx.getLocation({
    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    success: function(res) {
      
      that.setData({
          latitudeCur:res.latitude,
          longitudeCur:res.longitude
            });
      that.theckFlag();
    }
  })

  },
  theckFlag:function(){
    if(this.data.wxUserInfo&&this.data.latitudeCur&&this.data.longitudeCur){
      this.sendReq(this.data.typedata,this.data.urgent);
    }
  },

  onReady:function(){
    // 页面渲染完成
 
  },
  onShow:function(){
    // 页面显示
   
    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})