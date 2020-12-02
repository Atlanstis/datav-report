<template>
  <common-card title="今日交易用户数" :value="'59,648'">
    <template>
      <v-echarts id="today-users-chart" :options="options"></v-echarts>
    </template>
    <template v-slot:footer>
      <div>
        <span>退货率</span>
        <span class="emphasis">3.46%</span>
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
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          data: [
            '0:00',
            '1:00',
            '2:00',
            '3:00',
            '4:00',
            '5:00',
            '6:00',
            '7:00',
            '8:00',
            '9:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00'
          ],
          show: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'bar',
            data: [
              410,
              82,
              200,
              334,
              390,
              330,
              220,
              150,
              82,
              200,
              134,
              290,
              330,
              150
            ],
            barWidth: '60%'
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

<style lang="scss" scoped>
#today-users-chart {
  width: 100%;
  height: 100%;
}
</style>
