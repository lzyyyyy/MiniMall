import requset from './network.js'

export function getCategory() {
  return requset({
    url:"/category"
  })
}

export function getSubcategory(maitKey) {
  return requset({
    url:"/subcategory",
    data:{
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return requset({
    url: '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}