<template>
  <section class="sidebar fixed py-5">
    <p class="mb-5 mx-5">
      <router-link to="/">
        <span>
          <unicon
            name="estate"
            class="icon-sidebar"
            width="35"
            height="35"
          ></unicon>
        </span>
        Beranda
      </router-link>
    </p>
    <p class="m-5">
      <router-link to="/blog">
        <span>
          <unicon
            name="newspaper"
            width="35"
            height="35"
            class="icon-sidebar"
          ></unicon>
        </span>
        Blog
      </router-link>
    </p>
    <p class="m-5">
      <router-link to="/cerita">
        <span>
          <unicon
            name="images"
            width="35"
            height="35"
            class="icon-sidebar"
          ></unicon>
        </span>
        Cerita
      </router-link>
    </p>
    <p class="m-5">
      <router-link to="/about">
        <span>
          <unicon
            name="question-circle"
            width="35"
            height="35"
            class="icon-sidebar"
          ></unicon>
        </span>
        Tentang
      </router-link>
    </p>
    <p class="m-5">
      <router-link to="/settings">
        <span>
          <unicon
            name="setting"
            width="35"
            height="35"
            class="icon-sidebar"
          ></unicon>
        </span>
        Pengaturan
      </router-link>
    </p>
  </section>
</template>

<style scoped src="./style.css"></style>
