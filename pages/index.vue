<template>
  <div class="_homePage">
    <h1>HOME</h1>
  </div>
</template>

<script>
import { ref, useStore, useRouter, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  setup() {
    const store = useStore()
    const router = useRouter()
    //.../
    onMounted(function () {
      store.state.persistance()
    })
    //.../
  },
}
</script>
