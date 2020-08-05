import {getCategory,getSubcategory,getCategoryDetail} from "../../service/category.js"

Page({
  data:{
    categories: [],
    categoryData: {}
  },
  onLoad: function(options) {
    this._getData()
  },
  _getData() {
    //1.请求分类数据
    getCategory().then(res=>{
      // console.log(res);
      const categories = res.data.data.category.list;

      
    //2.初始化每个分类子数据
      const categoryData = {}
      for(let i = 0; i < categories.length ; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      }
      //3.修改data中的数据
    this.setData({
        categories: categories,
        categoryData: categoryData        
      })
    //4.请求第一个子类别数据
    this._getSubcategory(0)

    
    //5.请求第一个子类别详细数据
    this._getCategoryDetail(0)
    })
  },
  _getSubcategory(index) {
    const maitKey = this.data.categories[index].maitKey
    getSubcategory(maitKey).then(res=>{
      const tempcategoryData = this.data.categoryData
      tempcategoryData[index].subcategories = res.data.data.list
      this.setData({
        categoryData: tempcategoryData
      })
      
            
    })
  },
  _getCategoryDetail(currentIndex) {
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
  },  
  _getRealCategoryDetail(index, miniWallKey, type) {
    getCategoryDetail(miniWallKey, type).then(res => {
      // 1.获取categoryData
      const categoryData = this.data.categoryData;

      // 2.修改数据
      categoryData[index].categoryDetail = res;

      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData
      })
      console.log(this.data.categoryData[0].subcategories);
    })
  },
})