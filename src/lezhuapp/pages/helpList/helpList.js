var app=getApp();
Page(
  {
  data: {
    wxUserInfo:null,
    latitudeCur:null,
    longitudeCur:null,
    typedata: "全部",
    typearray: ['全部','取快递','带文件','租房', '其他'],
    array: [{
      latitude: 23.099794,
      longitude: 113.324520,
      location:"上海市人民广场",
      iconPath: '../../images/bg01.jpg',
      nickName:"阿大",
      phone:"15628233628",
      headIcon:"../../images/img01.jpg",
      distance:2,
      title:"求帮忙去快递",
      content:"如题，求帮忙去快递如题，求帮忙去快递如题，求帮忙去快递如题，求帮忙去快递如题，求帮忙去快递如题，求帮忙去快递如题，求帮忙去快递~谢谢啦",
      payScore:500

    }, {
      latitude: 31.2398060000,
      longitude: 121.6695800000,
      location:"上海唐镇地铁站",
      iconPath: '../../images/bg02.jpg',
      nickName:"阿二",
      phone:"18925637903",
      headIcon:"../../images/img02.jpg",
      distance:3,
      title:"求带材料去总部",
      content:"求带材料去总部~谢谢啦",
      payScore:1000
    }]
  },

  openMap: function(e) {
    var infoObj=e.currentTarget.dataset;
    app.mapData.latitude=Number(infoObj.latitude);
    app.mapData.longitude=Number(infoObj.longitude);
    app.mapData.location=infoObj.location;
    app.mapData.nickName=infoObj.nickname;
    app.mapData.phone=infoObj.phone;
    app.mapData.headIcon=infoObj.headicon;
    app.mapData.payScore=infoObj.payscore;
    app.mapData.title=infoObj.title;
    app.mapData.content=infoObj.content;
    wx.navigateTo({
      url: '../helpDetail/helpDetail'
    })
    // console.log(app.mapData)
  },
bindPickerChange: function(e) {
    var that = this;
    var i=e.detail.value; 
    that.setData({
      index: i,
      typedata:that.data.typearray[i]
    });


  },

  sendReq:function(){
    //发送请求
    var reqData={};
    reqData.uesrId=this.data.wxUserInfo.nickName;
    reqData.longitude=this.data.longitudeCur;
    reqData.latitude=this.data.latitudeCur;
    reqData.svrType=this.data.typedata;
    reqData.urgent="false";
console.log("reqData")
    console.log(reqData)

    wx.request({
    url: '', //接口地址
    data: reqData,
    header: {
        'content-type': 'application/json'
    },
    success: function(res) {
        
    },
     fail: function() {
       //mock
       
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
      this.sendReq();
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