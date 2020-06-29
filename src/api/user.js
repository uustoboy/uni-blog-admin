import request from '@/utils/request'
const baseURL = 'http://localhost:3000'
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

export function login(params) {
  return request({
    url: `${baseURL}/cgi-bin/token`,
    method: 'get',
    params: {
      ...params
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
