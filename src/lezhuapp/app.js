//app.js
App({
  onLaunch: function () {
    console.log("Lezhu app start");
  },
  //全局登录函数
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  //保存用户信息
  globalData:{
    userInfo:null
  },
  mapData:{
    latitude: null,
    longitude: null,
    headIcon:"",
    nickName:"",
    payScore:null,
    phone:null,
    title:"",
    content:""

  },
  mockUserInfo:{
    userId:"mockUser1",
    userName:"Horizon",
    mobile:"12345678912",
    usePoint:"1000",
    avatarUrl:""
  }
})



