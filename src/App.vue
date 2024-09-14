<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from "@/store";
 
const appStore = useAppStore();

const locale = computed(() => appStore.locale);

 
</script>

<template>
  <el-config-provider :locale="locale"  >

     <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>

 </template>

<style scoped></style>
