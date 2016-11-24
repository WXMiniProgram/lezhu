var app=getApp()
Page(
  {
  data: {
    typedata: "全部",
    typearray: ['全部', '紧急', '快递','租房', '其他'],
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
    console.log(e.currentTarget.dataset);
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
    console.log("******")
    console.log(app.mapData)
  },
bindPickerChange: function(e) {
    var that = this;
    var i=e.detail.value; 
    that.setData({
      index: i,
      typedata:that.data.typearray[i]
    });
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