<template>
  <div class="_homePage">
    <h1>HOME</h1>
  </div>
</template>

<script>
import { ref, useStore, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'IndexPage',
  setup() {
    const store = useStore()
    //.../
    onMounted(function () {
      store.state.persistance()
    })
    //.../
  },
}
</script>
