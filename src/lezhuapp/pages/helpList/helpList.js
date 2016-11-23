var app=getApp()
Page(
  {
  data: {
    array: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../../images/bg01.jpg',
      nickName:"阿大",
      headIcon:"../../images/img01.jpg",
      distance:2

    }, {
      latitude: 31.2398060000,
      longitude: 121.6695800000,
      iconPath: '../../images/bg02.jpg',
      nickName:"阿二",
      headIcon:"../../images/img02.jpg",
      distance:3

    }]
  },

  openLocation:function (obj){
    app.mapData.latitude=Number(obj.latitude),
    app.mapData.longitude=Number(obj.longitude),
    app.mapData.headIcon=obj.headicon
  },

  openMap: function(e) {
    console.log(e.currentTarget.dataset);
    var infoObj=e.currentTarget.dataset;
    this.openLocation(infoObj);
    wx.navigateTo({
      url: '../helpDetail/helpDetail'
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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