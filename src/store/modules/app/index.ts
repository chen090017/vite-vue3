import { nextTick } from 'vue';
import { defineStore } from 'pinia';
 
// 导入 Element Plus 中英文语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
interface AppState {
 
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean;
  name:string;
  locale:any;
  language:string;
}

export const useAppStore = defineStore('app-store', {


  
  state: (): AppState => ({
 
    reloadFlag: true,
    name:'框架',
    locale:zhCn,
    language:'zh-cn',
 
  }),
  actions: {
 
    /**
     * 重载页面
     * @param duration - 重载的延迟时间(ms)
     */
    async reloadPage(duration = 0) {
      this.reloadFlag = false;
      await nextTick();
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true;
        }, duration);
      } else {
        this.reloadFlag = true;
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 });
      }, 100);
    },

   /**
   * 切换语言
   *
   * @param val
   */
   changeLanguage(val: string) {
    this.language=val
    if ('en' ==val) {
      this.locale=en
    } else {
      this.locale=zhCn
    }
   },


 







   
  }
});
