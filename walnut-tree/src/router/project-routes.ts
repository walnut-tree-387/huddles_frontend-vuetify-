export default [
  {
    path: '/',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/product-cards',
    name: 'Product Cards',
    component: () => import('@/views/ProductCardsView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/huddles',
    name: 'Huddle',
    component: () => import('../views/HuddlesView.vue')
  },
  {
    path: '/huddles/login',
    name: 'Huddle Login',
    component: () => import('../views/HuddleLoginView.vue')
  },
  {
    path: '/huddles/:huddleUuid',
    name: 'Huddle Chat Page',
    component: () => import('../views/HuddleView.vue')
  },
  {
    path: '/huddles/friend-requests',
    name: 'Huddle Friend Request Page',
    component: () => import('../views/HuddlesFriendRequestView.vue')
  }
]
