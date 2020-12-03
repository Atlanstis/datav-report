<template>
  <common-card title="累计订单数" :value="'2,115,465'">
    <template>
      <v-echarts id="total-orders-chart" :options="options"></v-echarts>
    </template>
    <template v-slot:footer>
      <div>
        <span>昨日订单数</span>
        <span class="emphasis">453,564</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/common-card-mixin'

export default {
  mixins: [CommonCardMixin],

  data() {
    return {
      options: {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [
              620,
              432,
              220,
              534,
              790,
              430,
              220,
              320,
              532,
              320,
              834,
              690,
              530,
              220,
              620
            ],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
