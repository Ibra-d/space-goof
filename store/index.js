import { useRoute, useRouter } from '@nuxtjs/composition-api'

export const state = () => ({
  persistance: () => {
    const router = useRouter()
    const route = useRoute()
    const userToken = localStorage.getItem('userToken')
    if (!userToken) {
      router.push('connection')
    } else {
      router.push('/')
      ///.
      setTimeout(function () {
        localStorage.removeItem('userToken')
        router.push('connection')
      }, 24 * 60 * 60 * 1000)
    }
  },
})
