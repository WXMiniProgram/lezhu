var app=getApp()
Page({
  data: {
    latitude: 23,
    longitude: 131,
    scale:28,
    markers: [
      {latitude: 23,
      longitude:131,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
      }],
    covers: []
  },

  //打开定位信息
  openLocation:function (){
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
          wx.openLocation({
            latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
            longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
            scale: 28, // 缩放比例
          })
      },
    })
  },
 
//更新地址信息
  getLocation:function () {
    var that = this
        var newCover = {
            latitude: app.mapData.latitude,
            longitude: app.mapData.longitude,
            iconPath: app.mapData.headIcon
          };
        var oriCovers = that.data.covers;
        oriCovers.push(newCover);
        that.setData({
          latitude: app.mapData.latitude,
          longitude: app.mapData.longitude,
          scale:28,
          markers: [],
          covers: oriCovers
        });
  },
   onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // this.getLocation();
     console.log(options.latitude)
  },
  onReady:function(){
    // 页面渲染完成
 
  },
  onShow:function(){
    // 页面显示
    
    // this.openLocation();
    // this.chooseLocation();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
 
})