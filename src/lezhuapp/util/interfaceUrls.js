var prefix = {
    "develop":"http://localhost:8081/intl-console-web/user/",
    "test":"http://172.20.6.5:8081/intl-console-web/user/",
    "produce":"https://weapp.zhanghao90.cn/intl-console-web/user/"
}["develop"];

module.exports = {
    //helpList
    "searchServiceNeeded":prefix + "searchServiceNeeded",
    //myPage
    "getUserInfo":prefix + "getUserInfo",
    //helpDetail
    "acceptRequest":prefix + "acceptRequest",
    //helpInput
    "postNeed":prefix + "postNeed",
    //myToHelp
    "searchMyService":prefix + "searchMyService",
    //myGetHelp
    "searchMyNeed":prefix + "searchMyNeed",
    "confirmService":prefix + "confirmService",
    "confirmServiceComplete":prefix + "confirmServiceComplete"
};