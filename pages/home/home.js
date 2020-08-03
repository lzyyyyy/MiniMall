import {getMultiData,getGoodsData} from '../../service/home.js'

Page({
  data: {
    showBackTop: false,
    banner: [],
    recommend: [],
    goods:{
      'pop':{page:1,list:[]},
      'new':{page:1,list:[]},
      'sell':{page:1,list:[]},
    },
    currentType:'pop',
    topPosition: 0,
    tabControlTop: 0
  },
  onLoad: function (options) {
    this._getMultiData()
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
    console.log(this.data.goods);
  },

  // 事件相关方法
  onBackTop() {
    this.setData({
      showBackTop:  false
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300,
    })
  },
  tabClick(e) {
    let currentType = ''
    switch(e.detail.index) {
      case 0:
        currentType = 'pop'
        break
      case 1:
        currentType = 'new'
        break
      case 2:
        currentType = 'sell'
        break
    }
    this.setData({
      currentType: currentType
    })    
  },
  //监听滚动
  onPageScroll(e){
    const scrollTop=e.scrollTop
    this.setData({
      showBackTop: scrollTop>=1000
    })
  },
  //监听滚动到底部
  onReachBottom() {
    this._getGoodsData(this.data.currentType)
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
  _getGoodsData(type) {
    const page = this.data.goods[type].page;
    getGoodsData(type,page).then(res=>{
      // 1.取出数据
      const list = res.data.data.list;

      // 2.将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;

      // 3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })
      
      
    })
  }
})