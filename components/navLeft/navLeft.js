// components/navLeft/navLeft.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navArr:{
      type:Array,
      value:[]
    },
    index:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    categoryname: "",
    ind:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navItemClick({ target}){
      let { ind, tag }=target.dataset
      this.triggerEvent("changeNav",{
        ind,tag
      })
    }
  }
})
