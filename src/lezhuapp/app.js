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
  },
  mockGetHelpArray:[
    {
      taskId:"001",
      srvTtitle:"取快递",
      srvDesc:"正在开会，帮忙到1699号大门取快递！",
      srvType:"01",
      startTime:"",
      endTime:"",
      srvCost:"50",
      helplerId:"xczheng",
      processInfo:"0"
    },
    {
      taskId:"002",
      srvTtitle:"带文件",
      srvDesc:"求带文件到总部！",
      srvType:"02",
      startTime:"",
      endTime:"",
      srvCost:"50",
      helplerId:"xczheng",
      processInfo:"1"
    },
    {
      taskId:"003",
      srvTtitle:"租房",
      srvDesc:"求租房！",
      srvType:"03",
      startTime:"",
      endTime:"",
      srvCost:"50",
      helplerId:"zhanghao",
      processInfo:"2"
    },
    {
      taskId:"004",
      srvTtitle:"其他",
      srvDesc:"其他求助！",
      srvType:"99",
      startTime:"",
      endTime:"",
      srvCost:"50",
      helplerId:"zhanghao",
      processInfo:"3"
    }
  ]
})



