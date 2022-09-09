<template>
  <el-container class="container" direction="vertical">
    <base-header />
    <el-main class="main">
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script setup>
import BaseHeader from "./BaseHeader.vue";
</script>

<style lang="sass" scoped>
.main
  padding-top: 8rem
  height: 100%
  @media (max-width: $bp-440)
    padding-top: 16rem
.container
  height: 100vh
</style>
