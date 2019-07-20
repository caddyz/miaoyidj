import fly from '@/utils/request'

const baseURI = 'http://www.localhost:9090/api/'

const api = {
  getAllProduct: (r) => fly.get('product/getAllProduct', null, {
    baseURL: baseURI
  }),
  getClassifyData: (r) => fly.get('image/getIndexProduct', null, {
    baseURL: baseURI
  }),
  getHtmlCode: (r) => fly.get('product2img/getProductImg', {id: r}, {
    baseURL: baseURI
  })
}
export default api
