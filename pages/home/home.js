import {getMultiData,getGoodsData} from '../../service/home.js'

Page({
  data: {
    banner: [],
    recommend: [],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]},
    }
  },
  onLoad: function (options) {
    this._getMultiData()
  },
  // 网络相关方法
  _getMultiData() {
    getMultiData().then(res=>{
      this.setData({        
        banner: res.data.data.banner.list,
        recommends: res.data.data.recommend.list,
      })
    })
  },
  _getGoodsData() {
    getGoodsData(type,page).then(res=>{
      console.log(res);
      
    })
  }
})