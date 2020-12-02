<template>
  <common-card title="累计订单数" :value="'2,115,465'">
    <template>
      <div id="total-orders-chart"></div>
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

  mounted() {
    const dom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(dom)
    chart.setOption({
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
            color: 'purple '
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
    })
  }
}
</script>

<style lang="scss" scoped>
#total-orders-chart {
  width: 100%;
  height: 100%;
}
</style>
