<template>
  <section class="navbar">
    <nav class="grid grid-cols-12">
      <!-- <div class="nav-link col-span-3">
        <router-link to="/">
          <unicon name="arrow"></unicon>
        </router-link>
        <router-link to="/">
          <unicon name="heart"></unicon>
        </router-link>
        <router-link to="/">
          <unicon name="question-circle"></unicon>
        </router-link>
      </div> -->
      <div class="nav-logo col-span-4">
        <router-link to=""> Handbook Muslim </router-link>
      </div>
      <div class="nav-search col-span-8">
        <div class="search">
          <input
            type="search"
            class="search-txt"
            name=""
            placeholder="Search"
          />
          <a href="#" class="search-btn"></a>
          <unicon name="search" class="fa-search" fill="white"></unicon>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {}
</script>

<style scoped src="./style.css"></style>
