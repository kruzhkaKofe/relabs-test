<template>
  <el-header class="header">
    <nav class="nav">
      <el-button
        class="nav__button"
        v-for="page in pages"
        :key="page.path"
        @click="changePage(page)"
        :class="{
          'nav__button--active': activePage === page.path,
        }"
        >{{ page.title }}</el-button
      >
    </nav>
  </el-header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const pages = [
  {
    title: "Главная страница",
    path: "/",
  },
  {
    title: "Авторизация",
    path: "/login",
  },
  {
    title: "Магазин",
    path: "/shop",
  },
];

const activePage = ref("/");

const changePage = (page) => {
  if (activePage.value === page.path) return;
  router.push(`${page.path}`);
};

watch(route, () => {
  activePage.value = route.path;
});
</script>

<style lang="sass" scoped>
.header
  width: 100%
  padding-top: 1rem
  padding-bottom: 1rem
  position: fixed
  top: 0
  left: 0
  right: 0
  background-color: #FFFFFF
  z-index: 10
.nav
  display: flex
  border-bottom: 0.1rem solid var(--el-border-color)
  background-color: #FFFFFF
  @media(max-width: 440px)
    &
      flex-direction: column
      justify-content: center

  &__button
    font-size: 1.6rem
    padding: 2rem
    border-radius: 0
    border: none
    background-color: transparent
    border-bottom: 0.4rem solid transparent
    margin: 0

    &--active
      border-bottom: 0.4rem solid var(--el-color-primary)
      color: var(--el-button-hover-text-color)
</style>
