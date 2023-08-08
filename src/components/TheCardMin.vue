<script setup lang="ts">
const props = defineProps({
  tipe: String,
  dbn: Number,
  pressure: Number,
  dTube: Number,
  l: { type: Number, required: true },
  nWays: Number,

})

const russianTipe = computed(() => {
  switch (props.tipe) {
    case 'tk':
      return 'ТК'
    case 'xn':
      return 'ХН'
    case 'xk':
      return 'ХК'
    default:
      return 'ТН'
  }
})

const nameTipe = computed(() => {
  switch (props.tipe) {
    case 'xn':
    case 'xk':
      return 'Холодильник'
    default:
      return 'Теплообменник'
  }
})
const router = useRouter()

const goHeater = () => {
  router.push('/heater')
}
</script>

<template>
  <div class="bg-violet-9 dark:bg-trueGray-800 text-white px-4 rounded-3xl max-w-sm  hover:bg-purple-9 hover:shadow-black py-4 pt-5 mt-4 shadow-md shadow-purple-500/50" @click="goHeater">
    <div class="text-start ">
      <h1 text="2xl">
        {{ nameTipe }}
      </h1>
      <h2>{{ dbn }} {{ russianTipe }}Г-{{ pressure }}-М1/{{ dTube }}Г-{{ l / 1000 }}-{{ nWays }}-У-И </h2>
      <h2> ТУ 3612-024-00220302-02</h2>
    </div>
  </div>
</template>
