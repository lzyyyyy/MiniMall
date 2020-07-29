// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:["流行","新款","精选"]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
    }
  }
})
