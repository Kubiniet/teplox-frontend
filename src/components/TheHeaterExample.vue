<script setup lang="ts">
const props = defineProps({
  inSub: { type: Object, required: true },
  outSub: { type: Object, required: true },
})
const inSub = props.inSub
const outSub = props.outSub
</script>

<template>
  <div class="bg-violet-9 dark:bg-trueGray-800 text-white px-4 rounded-3xl max-w-sm  hover:bg-purple-9 hover:shadow-black py-4 pt-5 mt-4 shadow-md shadow-purple-500/50">
    <div class="text-start ">
      <h2>
        Трубное пространство :<br>{{ inSub.name }} Т={{ inSub.t_1 }}-{{ inSub.t_2 }} °C, Р={{ inSub.pressure_work }} МПа ,G={{ inSub.flow }} кг/с.
      </h2>
      <h2>
        Межтрубное пространство :<br>{{ outSub.name }} Т={{ outSub.t_1 }}-{{ outSub.t_2 }} °C, Р={{ outSub.pressure }} МПа ,G={{ outSub.flow }} кг/с.
      </h2>
    </div>
  </div>
</template>
