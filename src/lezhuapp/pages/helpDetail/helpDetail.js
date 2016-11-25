var app = getApp();
Page({
  data: {
    latitude: null,
    longitude: null,
    location:null,
    headIcon:null,
    nickName:null,
    payScore:null,
    title:"",
    content:"",
    taskId:"",
    markers: [
  
    ],
    covers: [

    ]
    
  },
  helpClick:function(){
     var that = this;
   wx.showModal({
     title: '订单确认',
    content: '请尽快与发布者联系！',
  success: function(res) {
    if (res.confirm) {
      //请求
    that.sendReq();
    }
  }
})
  },
  sendReq:function(){
    //发送请求
    var that = this;
    var reqData={};
    reqData.taskId=that.data.taskId;
    reqData.helperId=that.data.nickName;

    wx.request({
    url: 'https://wechatapp.zhhhorizon.net/intl-console-web/user/acceptRequest', //接口地址
    data: reqData,
    header: {
        'content-type': 'application/json'
    },
    success: function(res) {
         wx.navigateTo({
      url: '../helpConfirmed/helpConfirmed?mobile='+res.data.mobile
    })
    },
     fail: function() {
       //mock
      wx.navigateTo({
      url: '../helpConfirmed/helpConfirmed?mobile=15825638889'
    })
    }
    })
  },
  onLoad: function () {
    var that = this
  	//调用应用实例的方法获取全局数据
    that.setData({
    latitude: app.mapData.latitude,
    longitude: app.mapData.longitude,
    location: app.mapData.location,
    headIcon:app.mapData.headIcon,
    nickName:app.mapData.nickName,
    payScore:app.mapData.payScore,
    title:app.mapData.title,
    content:app.mapData.content,
    taskId:app.mapData.taskId,
    covers:{
      latitude: app.mapData.latitude,
      longitude: app.mapData.longitude,
      iconPath: '../../images/map-location.png',
      rotate: 0
    }
    })
  }
})