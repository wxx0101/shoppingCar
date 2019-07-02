const app = getApp();
Page({
  data: {
    banner: [{
        "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561607520242&di=33cc92a84e3074cd980503ad7d9c0635&imgtype=0&src=http%3A%2F%2Fpic34.nipic.com%2F20131016%2F13429999_154522257132_2.jpg"
      },
      {
        "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561607520241&di=b85996787d3fe01ca1200a19bfdb94b4&imgtype=0&src=http%3A%2F%2Fpic.97ui.com%2Fyc_pic%2F00%2F00%2F08%2F79%2F53e3829fe1012cf8b092a602b7ba0e16.jpg%2521w1200"
      },
      {
        "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561607520240&di=ea38016688d61ea6618fab54bf95651f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c8545787c0bb0000012e7ed665f8.jpg"
      }
    ],
    navArr: [],
    listArr: [],
    index: 0,
    id: "100"
  },
  changeNav({
    detail
  }) {
    let {
      ind,
      tag
    } = detail;
    this.setData({
      index: ind,
      id: tag
    },()=>{
      // console.log(this.data.index)
    })
  },
  onLoad: function(options) {
    wx.request({
      url: "http://169.254.126.4:8000/food.json",
      success: ({
        data
      }) => {
        app.globalData.dataList = data.categoryList;
        this.setData({
          navArr: data.categoryList,
          listArr: data.categoryList
        })
      }
    })
  },
  changeIndex({ detail}){
    let { i } = detail;
    this.setData({
      index: i
    })
  },
  onReady: function() {
  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
})