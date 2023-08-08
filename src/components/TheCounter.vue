<script setup lang="ts">
const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    <button class="dec" @click="dec()">
      -
    </button>

    {{ count }}
    <button class="inc" @click="inc()">
      +
    </button>
  </div>
</template>
