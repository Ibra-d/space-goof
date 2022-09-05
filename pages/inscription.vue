<template>
  <div class="inscription__form__container">
    <h1>INSCR...</h1>
  </div>
</template>

<script>
import { onMounted, ref, useRouter, useStore } from '@nuxtjs/composition-api'
export default {
  name: 'InscriptionPage',
  setup() {
    const store = useStore()
    onMounted(function () {
      // store.state.persistance()
    })
  },
}
</script>

<style></style>
