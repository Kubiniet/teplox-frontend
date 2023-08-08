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
    <span />
    <span text-2xl text-bold>TEPLOX</span>
    <button icon-btn pr-4 @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
  </div>
</template>
