import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDettle from './components/user/UserDettle.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export const routes = [
  {
    path: '',
    name: 'home',
    component: {
      default: Home,
      'header-top': Header
    }
  },

  {
    path: '/user',
    component: {
      default: User,
      'header-bottom': Header
    },
    children: [
      {
        path: '/',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDettle
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
]