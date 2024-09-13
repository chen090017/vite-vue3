import { resolveToken } from '../utils'

const users = {
  admin: {
    id: 1,
    name: 'admin',
    avatar: 'https://assets.qszone.com/images/avatar.jpg',
    email: 'Ronnie@123.com',
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: 'editor',
    avatar: 'https://assets.qszone.com/images/avatar.jpg',
    email: 'Ronnie@123.com',
    role: ['editor'],
  },
  guest: {
    id: 3,
    name: 'guest',
    avatar: 'https://assets.qszone.com/images/avatar.jpg',
    role: [],
  },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      return {
        code: 0,
        data: {
          ...(users[token] || users.guest),
        },
      }
    },
  },
  {
    url: '/api/getUserInfo',
    method: 'post',
    response: ({ query }) => {
        return {
            code: 200,
            data: {
                nickname: '@cname',
                age: '@integer(10-100)',
                uid: '@id',
                url: '@image',
                city: '@city',
                country: '@county(true)',
                province: '@province',
                mobile_phone: '@phone',
                email: '@email',
                region: '@region',
                menus: [
                    {
                        menu_name: '一级导航',
                        id: '@id',
                        code: 'Nav1',
                        children: [
                            {
                                code: 'about',
                                menu_url: 'views/about',
                                access_permissions: '["about"]',
                                children: [],
                                menu_name: '测试1',
                                id: '@id'
                            },
                            {
                                code: 'home',
                                menu_url: 'views/home',
                                access_permissions: '["home"]',
                                children: [],
                                menu_name: '测试2',
                                id: '@id'
                            }
                        ]
                    },

                ]
            },
        }
    },
},
]
