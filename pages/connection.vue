<template>
  <div class="_conectionCodeContainer">
    <h1>CONNECTION PAGE</h1>
    <button @click="connection">ici</button>
    <p>
      vous n'avez pas de compte
      <nuxt-link to="inscription">s'inscrire</nuxt-link>
    </p>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '../firebase/db'
import { ref, useStore, onMounted, useRouter } from '@nuxtjs/composition-api'
export default {
  name: 'ConnectionPage',
  setup() {
    const router = useRouter()
    const store = useStore()
    ///.
    onMounted(function () {
      store.state.persistance()
      ///.
    })
    ///.
    function connection() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, 'email@email.fr', 'password000')
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          localStorage.setItem('userToken', user.accessToken)
          router.push('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
        })
    }
    ///.
    return {
      connection,
    }
  },
}
</script>

<style></style>
