const app = getApp();
Component({
  data: {
    num: 0,
    spuId: 0,
    allPrice: 0,
    listArr: [],
    spuList: []
  },
  methods: {
    addBtnFn() {
      let {
        spuId,
        spuList,
        allPrice
      } = this.data
      // console.log(spuList)

      this.setData({
        // allPrice
      }, () => {
        allPrice = spuList.reduce((prev, next) => {
          // console.log(prev + (next.currentPrice * next.sellStatus)*1)
          return prev + (next.currentPrice * next.sellStatus)
        }, 0)
        this.setData({
          allPrice
        }, () => {
          console.log(this.data.spuList)
        })

      })

      spuList.forEach(item => {
        if (item.spuId == spuId) {
          this.setData({
            num: ++item.sellStatus
          })
        }
      })
    },
    delBtnFn() {
      let {
        spuId,
        spuList,
        num
      } = this.data
      spuList.forEach(item => {
        if (item.spuId == spuId && num > 0) {

          this.setData({
            num: --item.sellStatus
          })
        }
      })
    },
    BtnFn(e) {
      let {
        bool
      } = e.currentTarget.dataset,
      isfind = [],
        dataList = app.globalData.dataList, {
          spuId,
          num
        } = this.data;
      if (bool * 1) {
        num++;
      } else {
        if (num > 0) {
          num--
          
        } else {
          return
        }
      }
      dataList.forEach(item => {
        item.spuList.forEach(item => {
          if (item.spuId == spuId) {
            if(! isfind.length){
              isfind.push(item);
              app.globalData.change(item.currentPrice, bool * 1)
            }
            item.sellStatus = num;
            this.setData({
              num: num
            },()=>{
              console.log(app)
            })
          }
        })
      })
    }
  },
  ready() {
    // console.log(this.properties.spuList)
    let {
      spuId
    } = this.properties
    this.setData({
      spuId: spuId.spuId,
      num: 0,
      spuList: this.properties.spuList
    })
  },
  properties: {
    spuId: {
      type: null
    },
    spuList: {
      type: null
    }
  }
})