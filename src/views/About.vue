<template>
  <div class="home">
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <Navbar />
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <Sidebar />
      </div>
      <div class="col-span-9">
        <About />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/index.vue'
import Navbar from '@/components/navbar/index.vue'
import About from '@/components/about/index.vue'

export default {
  name: 'Home',
  data() {
    return {
      title: 'Tentang'
    }
  },
  created() {
    document.title = this.title
  },
  components: {
    Sidebar,
    Navbar,
    About
  }
}
</script>
