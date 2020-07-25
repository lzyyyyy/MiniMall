import {getMultiData} from '../../service/home.js'

Page({
  data: {
    banner: [],
    recommend: []
  },
  onLoad: function (options) {
    getMultiData().then(res=>{
      this.setData({
        banner: res.data.data.banner.list,
        recommends: res.data.data.recommend.list,
      })
    })
  }
})