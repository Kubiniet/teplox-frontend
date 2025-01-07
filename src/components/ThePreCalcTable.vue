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
          <b>Предварительный расчет</b>
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Параметр
        </td>
        <td>Ед.изм. </td>
        <td>Значение </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Коэффициент теплопередачи
        </td>
        <td>
          Вт/(м&sup2×К)
        </td>
        <td>200</td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Поверхность теплообмена, Fпр.
        </td>
        <td>
          м&sup2;
        </td>
        <td>
          {{ heater.he.area_of_exchange }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Рекомендуемый тип ТОА
        </td>
        <td>
          <br>
        </td>
        <td>
          {{ heater.he.tipe.toUpperCase() }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Параметры ТОА
        </td>
        <td>
          <br>
        </td>
        <td>
          <br>
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Поверхность теплообмена, Fкат.
        </td>
        <td>
          м&sup2;
        </td>
        <td>
          {{ heater.he.area_of_exchange }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Число ходов по тр.пространству, z
        </td>
        <td>
          шт.
        </td>
        <td>
          {{ heater.he.n_ways }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Диаметр трубок, dн
        </td>
        <td>
          мм
        </td>
        <td r>
          {{ heater.he.Dn_tube }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Толщина стенок трубок, Sст
        </td>
        <td>
          мм
        </td>
        <td>
          2
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Длина трубок, Lтр
        </td>
        <td>
          мм
        </td>
        <td>
          {{ heater.he.l }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Расположение трубок
        </td>
        <td>
          △
        </td>
        <td>
          Треугольник
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Диаметр кожуха, Dвн
        </td>
        <td>
          мм
        </td>
        <td>
          {{ heater.he.Dbn }}
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          Площадь проходного сечения:
        </td>
        <td>
          <br>
        </td>
        <td>
          <br>
        </td>
      </tr>
      <tr border-b>
        <td text-start ps-2>
          на 1 ход в трубном пространстве
        </td>
        <td>
          м&sup2;
        </td>
        <td>
          {{ heater.he.area_tube }}
        </td>
      </tr>
      <tr border-b border-purple-3>
        <td text-start ps-2>
          между перегородками в межтр.пр.
        </td>
        <td>
          м&sup2;
        </td>
        <td>
          {{ heater.he.area_out_tube }}
        </td>
      </tr>
      <tr>
        <td text-start ps-2>
          Число труб расчетное
        </td>
        <td>
          шт.
        </td>
        <td>
          {{ Math.ceil(heater.n_tube_calc) }}
        </td>
      </tr>
    </table>
  </div>
</template>
