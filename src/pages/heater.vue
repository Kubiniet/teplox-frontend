<script setup>
import { useHeaterStore } from '~/stores/useHeaterStore'

const store = useHeaterStore()
</script>

<template>
  <div>
    <div class="flex items-start flex-wrap justify-center  gap-4">
      <div>
        <TheCardMin
          :l="store.hes.he?.l.valueOf()"
          :dbn="store.hes.he.Dbn.valueOf()"
          :pressure="store.hes.he.pressure.valueOf()"
          :n-ways="store.hes.he.n_ways.valueOf()"
          :d-tube="store.hes.he.Dn_tube.valueOf()"
        />
        <TheHeaterExample
          :in-sub="store.hes.he.in_let_s"
          :out-sub="store.hes.he.out_let_s"
        />
      </div>
      <ThePreCalcTable />
      <ThePostCalcTable />
    </div>
  </div>
</template>
