<script setup lang="ts">
import { useHeaterStore } from '~/stores/useHeaterStore'

const store = useHeaterStore()
const heater = store.hes?.valueOf()
</script>

<template>
  <div class="bg-violet-9 dark:bg-trueGray-800 text-white px-4 rounded-3xl  hover:bg-purple-9 hover:shadow-black py-4 pt-5 mt-4 shadow-md shadow-purple-500/50">
    <table table-auto>
      <tr border-b>
        <td text-start ps-2 text-xl colspan="3">
          <b>Уточненный расчет</b>
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-1>
          Параметр
        </td>
        <td>Ед.изм. </td>
        <td pe-2>
          Труб.пр.
        </td>
        <td>Межтр.пр. </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Скорость потока, w
        </td>
        <td>
          м/с
        </td>
        <td>
          {{ heater?.vel_flow_in }}
        </td>
        <td>
          {{ heater?.vel_flow_out }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Число Рейнольдса, Re
        </td>
        <td />
        <td>
          {{ heater?.num_reynolds_in }}
        </td>
        <td>
          {{ heater?.num_reynolds_out }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Режим течения
        </td>
        <td />
        <td>
          {{ heater?.mode_flow_in }}
        </td>
        <td>
          {{ heater?.mode_flow_out }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Отношение (Pr/Pr×ст)^0,25
        </td>
        <td />
        <td>{{ heater?.relation_reynold_in }}</td>
        <td>{{ heater?.relation_reynold_out }}</td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Число Прандтля, Pr
        </td>
        <td />
        <td>{{ heater?.num_prandtla_in }}</td>
        <td>{{ heater?.num_prandtla_out }}</td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Число Нуссельта, Nu
        </td>
        <td />
        <td>{{ heater?.num_nusel_in }}</td>
        <td>{{ heater?.num_nusel_out }}</td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Коэффициент<br> теплоотдачи, α
        </td>
        <td>
          Вт/(м&sup2×К)
        </td>
        <td>
          {{ heater?.heat_transfer_coef_in }}
        </td>
        <td>
          {{ heater?.heat_transfer_coef_out }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Коэффициент<br> теплопроводности, λст
        </td>
        <td>
          Вт/(м×К)
        </td>
        <td colspan="2">
          40
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Расчетный коэффициент<br> теплопередачи, Кут.
        </td>
        <td>
          Вт/(м&sup2×К)
        </td>
        <td colspan="2">
          {{ heater?.factor_heat_transfer_calc }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Требуемая поверхность, Fут.
        </td>
        <td>
          м&sup2
        </td>
        <td colspan="2">
          {{ heater?.required_area_exchange }}
        </td>
      </tr>
      <tr>
        <td text-start ps-2>
          Запас (+) <br>
          недостаток поверхности (-)
        </td>
        <td>
          %
        </td>
        <td colspan="2">
          {{ heater?.area_margin_percent }}
        </td>
      </tr>
    </table>
  </div>
</template>
