<script setup lang="ts">
const props = defineProps({
  inSub: { type: Object, required: true },
  outSub: { type: Object, required: true },
  w_1: { type: Number, required: true },
  w_2: { type: Number, required: true },
  area_of_exchange: { type: Number, required: true },
})
const inSub = props.inSub
const outSub = props.outSub
const w_1 = props.w_1 - 0.0099
const w_2 = props.w_2 + 0.0097
const area_of_exchange = props.area_of_exchange * 1.1
</script>

<template>
  <div class="bg-violet-9 dark:bg-trueGray-800 text-white px-4 rounded-3xl max-w-sm  hover:bg-purple-9 hover:shadow-black py-4 pt-5 mt-4 shadow-md shadow-purple-500/50">
    <div class="text-start ">
        <h2 class="text-xl">
            Расчет оптимизации :
        </h2>

        <h3>
            Оптимальные значения скорости потока w
        </h3>

        <h3 class="text-red-500">
            W1 = {{ w_1.toFixed(3) }} м/с  ({{ inSub.name }}) 
        </h3>
        <h3 class="text-green-500">
            W2 = {{ w_2.toFixed(3) }} м/с  ({{ outSub.name }})
        </h3>
        <h3 >
            Оптимизированная поверхность теплообмена, <span class="text-red-500"> Fопт.	= {{ area_of_exchange.toFixed(3) }} м&sup2; </span>
        </h3>
        <h3>
            Затраты = {{ (area_of_exchange * 1333.333).toFixed(3) }} м&sup2;
        </h3>
    </div>
  </div>
</template>
