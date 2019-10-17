import api from './apiInit'

const resource = '/users'
export default {
  get() {
    return api.get(`${resource}`)
  },

  getUser(userId) {
    return api.get(`${resource}/${userId}`)
  },

  createUser(payload) {
    return api.post(`${resource}`, payload)
  },
}
