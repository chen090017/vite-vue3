import { defAxios as request } from '@/utils/http'

export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}

export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}


export const getUserInfo = () => {
  return request({
    url: '/getUserInfo',
    method: 'post',
  })
}
 

export const status401 = () => {
  return request({
    url: '/401',
    method: 'post',
  })
}

 