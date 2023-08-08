<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
const go = () => {
  router.push('/form/')
}
</script>

<template>
  <div>
    <div i-material-symbols:mode-heat-rounded text-5xl inline-block text-purple-600 />
    <p text-2xl>
      Калькулятор ТОА
    </p>
    <p>
      <em text-sm op75>Помощник будущего проэктировщика </em>
    </p>

    <div py-2 />
    <div flex justify-center>
      <img src="/heater.png" alt="Heater">
    </div>
    <div py-2 />
    <div flex justify-center gap-10>
      <button class="text-lg  btn" @click="go">
        Теплообменник
      </button>
      <button class="text-lg sm:text-md btn" @click="go">
        Холодильник
      </button>
    </div>
  </div>
</template>
