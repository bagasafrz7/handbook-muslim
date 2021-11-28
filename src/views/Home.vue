<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1 class="text-purple-700">Text Purple</h1>
    <button
      class="bg-red-500 hover:bg-red-700 rounded-full py-3 px-6 text-white"
    >
      Button
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
