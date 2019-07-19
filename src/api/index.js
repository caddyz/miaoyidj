import fly from '@/utils/request'

const baseURI = 'http://www.localhost:9090/'

const api = {
  getIndexData: (r) => fly.get('product/getAllProduct', null, {
    baseURL: baseURI
  })
}
export default api
