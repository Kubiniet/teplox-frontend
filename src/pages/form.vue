<script setup lang="ts">
import { z } from 'zod'
import { useHeaterStore } from '../stores/useHeaterStore'
import TheCardMIn from '~/components/TheCardMin.vue'

interface SubstanceInit {
  name: String
  t_1: Number | null
  t_2: Number | null
  pressure_work: Number | null
  heat_capacity: Number | null
  density: Number | null
  viscosity: Number | null
  thermal_conduct: Number | null
  flow: Number | null
  where: String
}

interface FormInit {
  const_exchange: Number
  in_sub: SubstanceInit
  out_sub: SubstanceInit
}

const form = reactive<FormInit>({
  const_exchange: 200,
  in_sub: {
    name: '',
    t_1: null,
    t_2: null,
    pressure_work: null,
    heat_capacity: null,
    density: null,
    viscosity: null,
    thermal_conduct: null,
    flow: null,
    where: 'inlet',
  },
  out_sub: {
    name: '',
    t_1: null,
    t_2: null,
    pressure_work: null,
    heat_capacity: null,
    density: null,
    viscosity: null,
    thermal_conduct: null,
    flow: null,
    where: 'outlet',
  },
})

const example = reactive<FormInit>({
  const_exchange: 200,
  in_sub: {
    name: 'water',
    t_1: 45,
    t_2: 90,
    pressure_work: 0.6,
    heat_capacity: 4180.9,
    density: 979.9,
    viscosity: 4.53,
    thermal_conduct: 0.277,
    flow: 9.32,
    where: 'inlet',
  },
  out_sub: {
    name: 'benzin',
    t_1: 150,
    t_2: 80,
    pressure_work: 1.2,
    heat_capacity: 2430,
    density: 759,
    viscosity: 6.605,
    thermal_conduct: 0.10266,
    flow: 10.3,
    where: 'outlet',
  },
})

const valid_substance = z.object({
  name: z.string(),
  t_1: z.number().positive(),
  t_2: z.number().positive(),
  pressure_work: z.number().positive(),
  heat_capacity: z.number().positive(),
  density: z.number().positive(),
  viscosity: z.number().positive(),
  thermal_conduct: z.number().positive(),
  flow: z.number().positive(),
  where: z.string(),
})

const er = reactive({ feo: {} })
const empty = ref(false)
const incorrect = ref(false)
const urlProd = ref('https://teplox-api.onrender.com/heaters')
const url = ref('http://127.0.0.1:8000/heaters')
const showHeaters = ref(false)
const loading = ref(false)

const store = useHeaterStore()

function calculate() {
  const validated_data = z.object({
    const_exchange: z.number().positive(),
    in_sub: valid_substance,
    out_sub: valid_substance,
  }).safeParse(form)
  if (!validated_data.success) {
    const e = validated_data.error.issues[0]
    er.feo = e
    empty.value = true
  }

  else {
    const {
      data,
      error,
      onFetchResponse,
    } = useFetch(url).put(form).json()
    loading.value = true
    onFetchResponse((response) => {
      store.$patch({ hesList: data.value })
      loading.value = false
      showHeaters.value = true
      empty.value = false
    })

    if (error.value) {
      er.feo = error.value
      incorrect.value = true
    }
  }
}
function showExampleValues() {
  form.const_exchange = example.const_exchange
  form.in_sub = example.in_sub
  form.out_sub = example.out_sub
}
</script>

<template>
  <div v-if="incorrect">
    <p text-2xl text-red pb-0>
      Попробуйте другие значения
    </p>
  </div>
  <div v-if="empty">
    <p text-2xl text-red pb-0>
      Выполняйте анкету
    </p>
  </div>
  <div flex justify-around flex-wrap>
    <div class=" form-card">
      <h1 class="text-2xl font-semibold text-white" pt-3>
        Трубное пространство
      </h1>
      <form class="mt-4 mx-2" action="" method="POST">
        <div flex gap-2>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="name"
                v-model="form.in_sub.name"
                name="name"
                type="text"
                class="peer h-10 w-full input "
                placeholder="name"
              >
              <label for="name" text-xs class="label ">Среда</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="pressure"
                v-model="form.in_sub.pressure_work"
                type="number"
                name="pressure"
                class="peer h-10 w-full input"
                placeholder="pressure"
              >
              <label for="pressure" class="label">Рраб. (МПа)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="flow"
                v-model="form.in_sub.flow"
                type="number"
                name="flow"
                class="peer h-10 w-full input"
                placeholder="Flow"
              >
              <label for="flow" class="label"> G (кг/с)</label>
            </div>
          </div>
        </div>
        <div flex mt-6 justify-between gap-2>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="t_1"
                v-model="form.in_sub.t_1"
                name="t_1"
                type="number"
                class="peer input"
                placeholder="t_1"
                required="true"
              >
              <label for="t_1" class="label text-xs">Твход (°C)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="t_2"
                v-model="form.in_sub.t_2"
                name="t_2"
                type="number"
                class="peer input"
                placeholder="t_2"
              >
              <label for="t_2" class="label">Твых (°C)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="density"
                v-model="form.in_sub.density"
                type="number"
                name="density"
                class="peer input"
                placeholder="density"
              >
              <label for="density" class="label  ">ρ (кг/м³)</label>
            </div>
          </div>
        </div>
        <div flex mt-6 justify-between gap-2>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="heat_capacity"
                v-model="form.in_sub.heat_capacity"
                name="heat_capacity"
                type="number"
                class="peer input"
                placeholder="heat_capacity"
              >
              <label for="heat_capacity" label> Ср Дж/(кг⋅К) </label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="viscosity"
                v-model="form.in_sub.viscosity"
                name="viscosity"
                type="number"
                class="peer input"
                placeholder="viscosity"
              >
              <label for="viscosity" class="label">ν (м²/с)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="thermal_conduct"
                v-model="form.in_sub.thermal_conduct"
                type="number"
                name="thermal_conduct"
                class="peer input"
                placeholder="thermal_conduct"
              >
              <label for="thermal_conduct" label>λ (Вт/(м⋅К))</label>
            </div>
          </div>
        </div>
        <div flex h-5 />
      </form>
    </div>
    <div class="form-card">
      <h1 class="text-2xl font-semibold text-white" pt-3>
        Межтрубное пространство
      </h1>
      <form class="mt-4 mx-2" action="" method="POST">
        <div flex gap-2>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="name_out"
                v-model="form.out_sub.name"
                name="name"
                required="true"
                type="text"
                class="peer h-10 w-full input"
                placeholder="name"
              >
              <label for="name_out" class="label">Среда</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="pressure_out"
                v-model="form.out_sub.pressure_work"
                type="number"
                name="pressure"
                class="peer h-10 w-full input"
                placeholder="pressure"
              >
              <label for="pressure_out" class="label">Рраб. (МПа)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="flow_out"
                v-model="form.out_sub.flow"
                type="number"
                name="flow"
                class="peer h-10 w-full input appearance-none"
                placeholder="Flow"
              >
              <label for="flow_out" class="label">G (кг/с)</label>
            </div>
          </div>
        </div>
        <div flex mt-6 justify-between gap-2>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="t_1_out"
                v-model="form.out_sub.t_1"
                name="t_1"
                type="number"
                class="peer input"
                placeholder="t_1"
              >
              <label for="t_1_out" class="label">Твход (°C)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="t_2_out"
                v-model="form.out_sub.t_2"
                name="t_2"
                type="number"
                class="peer input"
                placeholder="t_2_out"
              >
              <label for="t_2_out" class="label">Твых (°C)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="density_out"
                v-model="form.out_sub.density"
                type="number"
                name="density"
                class="peer input"
                placeholder="density"
              >
              <label for="density_out" class="label">ρ (кг/м³)</label>
            </div>
          </div>
        </div>
        <div flex mt-6 justify-between gap-2>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="heat_capacity_out"
                v-model="form.out_sub.heat_capacity"
                name="heat_capacity"
                type="number"
                class="peer input"
                placeholder="heat_capacity"
              >
              <label for="heat_capacity_out" label> Ср Дж/(кг⋅К)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="viscosity_out"
                v-model="form.out_sub.viscosity"
                name="viscosity"
                type="number"
                class="peer input"
                placeholder="viscosity"
              >
              <label for="viscosity_out" class="label">ν (м²/с)</label>
            </div>
          </div>
          <div class="w-1/3">
            <div class="relative">
              <input
                id="thermal_conduct_out"
                v-model="form.out_sub.thermal_conduct"
                type="number"
                name="thermal_conduct"
                class="peer input"
                placeholder="thermal_conduct"
              >
              <label for="thermal_conduct_out" label>λ (Вт/(м⋅К))</label>
            </div>
          </div>
        </div>
        <div flex h-5 />
      </form>
    </div>
  </div>
  <div flex justify-center>
    <div bg-violet-9 dark:bg-trueGray-800 px-4 rounded-3xl max-w-sm py-4 pt-5 mt-4 class="shadow-md shadow-purple-500/50">
      <div flex justify-between gap-3>
        <div class="w-3/4 ">
          <div class="relative">
            <input
              id="const_exchange"
              v-model="form.const_exchange"
              type="number"
              name="const_exchange"
              class="peer h-10 w-full input"
              placeholder="const_exchange"
            >
            <label for="const_exchange" class="label">К (Вт/(м²⋅К))</label>
            <label for="const_exchange" text="xs white dark:purple">(120 ... 300)</label>
          </div>
        </div>
        <div class="w-1/4 flex flex-col justify-center align-middle">
          <button
            type="submit"
            class=" pa-2  rounded-xl bg-purple hover:bg-purple-6 text-white font-semibold text-center cursor-pointer "

            @click="calculate"
          >
            Расчет
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showHeaters === false && loading === false">
    <div pt-4 text-3xl inline-block>
      Пример
    </div>
    <div flex justify-center>
      <TheHeaterExample
        :in-sub="example.in_sub"
        :out-sub="example.out_sub"
        @click="showExampleValues()"
      />
    </div>
  </div>
  <div
    v-else-if="loading === true"
    class=" m-4 inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
  <template v-else-if="showHeaters && store.hesList ">
    <div pt-4 text-3xl inline-block>
      Рекомендуемые аппараты
    </div>
    <div flex justify-center gap-x-4 flex-wrap>
      <div
        v-for="(item, index) in store.hesList"

        :key="item.he?.area_of_exchange.valueOf()"
      >
        <div v-if="item.he">
          <TheCardMIn
            :index="index"
            :l="item.he?.l.valueOf()"
            :dbn="item.he.Dbn.valueOf()"
            :pressure="item.he.pressure.valueOf()"
            :n-ways="item.he.n_ways.valueOf()"
            :d-tube="item.he.Dn_tube.valueOf()"
          />
        </div>
      </div>
    </div>
  </template>
</template>
