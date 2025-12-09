<script setup lang="ts">
import NavbarComponents from './components/NavbarComponents.vue';

</script>

<template>
  <NavbarComponents />
  <div class="navbar-spacer"></div>
  <router-view />
</template>

<style>
.navbar-spacer {
  height: 80px;
}
</style>