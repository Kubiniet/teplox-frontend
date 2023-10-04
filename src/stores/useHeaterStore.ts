import { defineStore } from 'pinia'
interface SubstanceInit {
  name: String
  t_1: Number
  t_2: Number
  pressure_work: Number
  heat_capacity: Number
  density: Number
  viscosity: Number
  thermal_conduct: Number
  flow: Number
  thermal_power: Number
  where: String
}

interface he {
  area_of_exchange: Number
  Dbn: Number
  l: Number
  area_tube: Number
  area_out_tube: Number
  n_ways: Number
  Dn_tube: Number
  in_let_s: SubstanceInit
  out_let_s: SubstanceInit
  tipe: String
  pressure: Number
  avg_dif_temp: Number
}
interface Hes {
  he: he | null
  avg_dif_tem: Number | null
  pollution: Number | null
  wall_tr: Number | null
  n_tube_calc: Number | null
  vel_flow_in: Number | null
  vel_flow_out: Number | null
  num_reynolds_in: Number | null
  num_reynolds_out: Number | null
  mode_flow_in: String | null
  mode_flow_out: String | null
  relation_reynold_in: Number | null
  relation_reynold_out: Number | null
  num_prandtla_in: Number | null
  num_prandtla_out: Number | null
  num_nusel_in: Number | null
  num_nusel_out: Number | null
  heat_transfer_coef_in: Number | null
  heat_transfer_coef_out: Number | null
  factor_heat_transfer_calc: Number | null
  required_area_exchange: Number | null
  area_margin_percent: Number | null
  is_good: boolean | null
}
interface State {
  hesList: Hes[] | null
  hes: Hes | null
}

export const useHeaterStore = defineStore('heaters', {
  state: (): State => {
    return {
      hesList: [],
      hes: null,
    }
  },
})
