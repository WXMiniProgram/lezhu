var app = getApp();
Page({
    data: {
    latitude: null,
    longitude: null,
    location:null,
    headIcon:null,
    nickName:null,
    phone:"",
    payScore:null,
    title:"",
    content:"",
    markers: [
      // {
    //   latitude: 23.099994,
    //   longitude: 113.324520,
    //   name: 'T.I.T 创意园',
    //   desc: '我现在的位置'
    // }
    ],
    covers: [

    ],
    modalHidden: true
  },
  helpClick:function(){
    this.setData({
      modalHidden: false
    })
  },
  modalCancle: function(e) {
    this.setData({
      modalHidden: true
    })
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
     wx.navigateTo({
      url: '../helpConfirmed/helpConfirmed'
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
    phone:app.mapData.phone,
    payScore:app.mapData.payScore,
    title:app.mapData.title,
    content:app.mapData.content,
    covers:{
      latitude: app.mapData.latitude,
      longitude: app.mapData.longitude,
      iconPath: '../../images/map-location.png',
      rotate: 0
    }
    })
  }
})