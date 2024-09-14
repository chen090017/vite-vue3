<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/store';
import { login ,getUserInfo,status401} from '@/api/auth'
import { lStorage } from '@/utils/cache'
import { setToken } from '@/utils/token'
const app = useAppStore();
import { useI18n } from "vue-i18n";
const {  t } = useI18n();

defineProps<{ msg: string }>()

const count = ref(0)

const loginInfo = ref({
  username: "admin1",
  password: "123456",
  captcha: "12gl"
})

const currentPage4 = ref(4)
 
const pageSize4 = ref(100)

initLoginInfo()

function initLoginInfo() {
  const localLoginInfo = lStorage.get('loginInfo')
  if (localLoginInfo) {
    loginInfo.value.username = localLoginInfo.username || ''
    loginInfo.value.password = localLoginInfo.password || ''
  }
}

const isRemember = ref(false)
async function handleLogin() {
  const { username, password, captcha } = loginInfo.value
  if (!username || !password) {
    // $message.warning('请输入用户名和密码')
    return
  }
  try {
    const res = await login({ username, password: password.toString(), captcha })
    if (res.code === 0) {
      // $message.success('登录成功')
      setToken(res.data.accessToken)
      if (isRemember.value) {
        lStorage.set('loginInfo', { username, password })
      } else {
        lStorage.remove('loginInfo')
      }
      // router.push('/')
    } else {
      // $message.warning(res.message)
    }
  } catch (error) {
    // $message.error(error.message)
  }
}




async function userInfo(){
    await getUserInfo()

     
} 

async function status_401(){
    await status401()

     
} 
 
 


</script>

<template>
  <div>
    <lang-select class="nav-action-item" />
    <div class="user-name">{{ $t('navbar.dashboard') }}</div>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="mb-4">
    <el-button @click="handleLogin">登入</el-button>
    <el-button  @click="userInfo"  type="primary">用户列表</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning" @click="status_401">401</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <h1>{{ msg }} {{ app.name }}</h1>
 
  <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :size="size"
     
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
       
    />

  <!-- 来自 Material Design 图标的橙色闹钟 -->
  <div class="i-mdi-alarm text-orange-400" />
  <div class="i-material-symbols:alarm-smart-wake w-1em h-1em"></div>
  <div class="i-ic:baseline-shape-line w-1em h-1em" style="color: #793535;"></div>
  <div class="i-cib:postwoman w-56px h-56px" style="color: #28c342;"></div>
  <div class="i-ph-anchor-simple-thin" />
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
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
