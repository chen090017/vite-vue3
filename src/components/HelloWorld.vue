<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../store';
const app = useAppStore();

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }} {{ app.name }}</h1>
  <!-- 来自 Material Design 图标的橙色闹钟 -->
  <div class="i-mdi-alarm text-orange-400" />
  <div class="i-material-symbols:alarm-smart-wake w-1em h-1em"></div><div class="i-ic:baseline-shape-line w-1em h-1em" style="color: #793535;"></div>  <div class="i-ph-anchor-simple-thin" />
   <div class="card w-2xl ">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p w-50>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div flex ml-35 p-20 rounded-5 bg="#fff">
    <div text-20 font-600>字体：</div>
    <div ml-15 p-10 pl-30 pr-30 rounded-5>
      <p text-12>font-size: 12px</p>
      <p text-16>font-size: 16px</p>
      <p text-20>font-size: 20px</p>

      <p font-300 mt-10>font-weight: 300</p>
      <p font-600>font-weight: 600</p>
      <p font-bold>font-weight: bold</p>
    </div>
  </div>

  <div flex p-20 ml-35 rounded-5 bg-white>
    <div text-20 font-600>颜色：</div>
    <div ml-15 p-10 pl-30 pr-30 rounded-5>
      <p color="#881337">color: #881337</p>
      <p c-pink-500>color: #ec4899</p>

      <p bg="pink" mt-10>background: pink</p>
      <p bg="#2563eb" mt-10>background: #2563eb</p>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $primaryColor;
}
</style>
