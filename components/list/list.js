const app = getApp();
Component({
  properties: {
    listArr: {
      type: Array,
      value: [],
      categoryName: "热销"
    },
    ID: {
      type: null
    }
  },
  data: {
    ind: 0,
    allPrice: app.globalData.allPrice,
    allNum: app.globalData.allNum,
  },
  ready() {
    // console.log(this.properties.listArr)
    app.globalData.change = (price, bool) => {
      let {
        allPrice,
        allNum
      } = this.data
      if (bool) {
        allPrice += price,
          allNum++
      } else {
        allPrice -= price,
          allNum--
      }
      this.setData({
        allPrice:allPrice,
        allNum:allNum
      })
    }
    const query = wx.createSelectorQuery().in(this);
    query.selectAll(".demo").boundingClientRect((res) => {
      let tops = res.map(item => item.top - res[0].top);
      let last = tops[tops.length - 1];
      this.setData({
        newData: tops.concat([last + res[res.length - 1].height])
      })
    }).exec()
  },
  methods: {
    scrollFn({
      detail
    }) {
      let {
        scrollTop
      } = detail;
      scrollTop = Math.ceil(scrollTop)
      let {
        newData
      } = this.data;
      if (scrollTop === 2815) {
        return
      }
      newData.forEach((item, i) => {
        if (scrollTop > item && scrollTop < newData[i + 1]) {
          this.triggerEvent("changeIndex", {
            i
          })
        }
      })
    },
    navigatorFn() {
      wx.switchTab({
        url: '../take_meals/take_meals',
      })
    }
  }
})