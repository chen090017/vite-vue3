<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div>
      <div class="i-mdi:language w-16px h-16px" style="color: #28c342;"></div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langOptions"
          :key="item.value"
          :disabled="appStore.language === item.value"
          :command="item.value"
        >
          {{ item.label }}  
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
 import { useAppStore } from "@/store/modules/app";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();

defineProps({
  size: {
    type: String,
    required: false,
  },
});

const langOptions = [
  { label: "中文", value: "zh-cn" },
  { label: "English", value: "en" },
];

const appStore = useAppStore();
 
function handleLanguageChange(lang: string) {
  locale.value = lang;
  appStore.changeLanguage(lang);

  ElMessage.success(t("langSelect.message.success"));
}
</script>
