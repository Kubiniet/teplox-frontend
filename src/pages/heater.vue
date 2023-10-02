<script setup>
const hes = {
  he: {
    area_of_exchange: 162.3,
    Dbn: 1000,
    l: 3000,
    area_tube: 0.0553,
    area_out_tube: 0.13,
    n_ways: 4,
    Dn_tube: 25,
    in_let_s: {
      name: 'string',
      t_1: 45.0,
      t_2: 90.0,
      pressure_work: 1.0,
      heat_capacity: 3320.0,
      density: 320.0,
      viscosity: 40.0,
      thermal_conduct: 240.0,
      flow: 10.0,
      thermal_power: 1494000.0,
      where: 'inlet',
      avg_temp: 64.92,
      process: 'heating',
    },
    out_let_s: {
      name: 'sdsd',
      t_1: 150.0,
      t_2: 80.0,
      pressure_work: 2.0,
      heat_capacity: 2440.0,
      density: 320.0,
      viscosity: 420.0,
      thermal_conduct: 220.0,
      flow: 10.0,
      thermal_power: 1708000.0,
      where: 'inlet',
      avg_temp: 111.36,
      process: 'cooling',
    },
    tipe: 'tk',
    pressure: 2.5,
    avg_dif_temp: 46.38,
  },
  avg_dif_tem: 46.38,
  pollution: 0.0002,
  wall_tr: 40.0,
  n_tube_calc: 689.82,
  vel_flow_in: 0.57,
  vel_flow_out: 0.24,
  num_reynolds_in: 2992.5,
  num_reynolds_out: 142.86,
  mode_flow_in: 'turb',
  mode_flow_out: 'laminar',
  relation_reynold_in: 1.0,
  relation_reynold_out: 0.93,
  num_prandtla_in: 0.02,
  num_prandtla_out: 0.15,
  num_nusel_in: 2.0,
  num_nusel_out: 1.89,
  heat_transfer_coef_in: 22857.14,
  heat_transfer_coef_out: 16632.0,
  factor_heat_transfer_calc: 2825.86,
  required_area_exchange: 11.4,
  area_margin_percent: 92.98,
  is_good: true,
}
</script>

<template>
  <div>
    <div class="flex items-start flex-wrap justify-center gap-4">
      <ThePreCalcTable :area-exchange="193.6" />
      <ThePostCalcTable />
    </div>
  </div>
</template>
