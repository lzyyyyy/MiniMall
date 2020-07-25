import requset from './network.js'

export function getMultiData() {
  return requset({
    url:'/home/multidata'
  })
}