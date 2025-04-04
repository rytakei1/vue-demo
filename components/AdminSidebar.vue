<template>
  <div class="w-48 min-h-full bg-surface-500">
    <NuxtLink v-for="item in sidebarItems" class="p-4 flex flex-col items-center hover:bg-primary-800 transition"
      :to="item.link" :class="{ 'bg-primary-600': $route.path === item.link }">
      <component :is="item.icon" class="text-white" />
      <span class="text-sm text-white mt-2">{{ item.label }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang='ts'>
import IconMovie from '~icons/icon-park-outline/movie';
import IconList from '~icons/cuida/list-outline';
const sidebarItems = [
  {
    label: 'Movies',
    icon: IconMovie,
    link: '/movies'
  },
  {
    label: 'Your List',
    icon: IconList,
    link: '/list'
  }
]
</script>

<style scoped></style>