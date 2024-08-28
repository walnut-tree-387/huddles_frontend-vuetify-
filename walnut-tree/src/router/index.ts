import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
// import { useUserStore } from '../stores/user'
import routes from './project-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})
// function checkIfGoingToAuthRoutes(route: RouteLocationNormalized) {
//   return route.matched.findIndex((r) => r.name === 'auth') !== -1
// }
// router.beforeEach(async (to, from, next) => {
//   let userStore = useUserStore()

//   if (!userStore.isUserFetchingFinished) {
//     try {
//       await userStore.fetchAndStoreUser()
//     } catch (e) {
//       console.log('Fetching user failed')
//     }
//   } else {
//     if (!checkIfGoingToAuthRoutes(to) && userStore.userFetchError) {
//       try {
//         userStore.$dispose()
//         userStore = useUserStore()
//         await userStore.fetchAndStoreUser()
//       } catch (e) {
//         console.log('Fetch user failed again')
//       }
//     }
//   }

//   if (checkIfGoingToAuthRoutes(to)) {
//     if (userStore.userFetchError) {
//       next()
//     } else {
//       next('/')
//     }
//   } else {
//     if (userStore.userFetchError) {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })

export default router
