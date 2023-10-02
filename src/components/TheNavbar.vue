<script setup lang="ts">
const router = useRouter()
const go = () => {
  router.push('/')
}
</script>

<template>
  <div
    bg-gradient-to-r
    from-violet-900
    to-fuchsia-900
    text="center gray-200"
    p="y2"
    font-bold
    flex
    justify-between
  >
    <span w-5 />
    <span text-3xl text-bold @click="go">TEPLOX</span>
    <button icon-btn pr-4 @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
  </div>
</template>
