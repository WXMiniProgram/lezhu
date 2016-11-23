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

  openMap: function(e) {
    console.log(e.currentTarget.dataset);
    var infoObj=e.currentTarget.dataset;
    var latitudesss=Number(infoObj.latitude);
    var longitudesss=Number(infoObj.longitude);
    var headIcon=infoObj.headicon;
    wx.navigateTo({
      url: '../helpDetail/helpDetail?latitude='+latitudesss
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