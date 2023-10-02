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
    <div flex justify-center>
      <p pt-8 w-md>
        <em text-sm op75 text-align-left>После ввода данных, приложение производит расчет аппарата по методике,
          описанной в <a href="https://files.stroyinf.ru/Data2/1/4293809/4293809541.htm">ТУ 3612-024-00220302-02 </a> для аппаратов с неподвижными трубными решетками и в
          для аппаратов с температурным компенсатором на кожухе.
        </em>
      </p>
    </div>
  </div>
</template>
