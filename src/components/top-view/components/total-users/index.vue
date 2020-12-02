<template>
  <common-card title="累计用户数" :value="'1,064,553'">
    <template>
      <div id="total-users-chart"></div>
    </template>
    <template v-slot:footer>
      <div class="footer-wraper">
        <span>日同比</span>
        <span class="emphasis">8.46%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">4.45%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from '../../mixins/common-card-mixin'

export default {
  mixins: [CommonCardMixin],
  mounted() {
    const dom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(dom)
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [200],
          stack: '总量',
          barWidth: 10,
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          data: [250],
          stack: '总量',
          itemStyle: {
            color: '#ccc'
          }
        },
        {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d:
                      'M523.955 832.173l323.744-512c6.24-9.856 6.624-22.336 0.992-32.512-5.632-10.24-16.384-16.576-28.033-16.576h-647.328c-11.647 0-22.4 6.336-28.033 16.576-2.656 4.8-3.968 10.112-3.968 15.424 0 5.952 1.664 11.904 4.929 17.088l323.616 512c5.856 9.28 16.064 14.911 27.040 14.912s21.184-5.632 27.040-14.912z',
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  shape: {
                    d:
                      'M511.997952 268.025732 146.975708 755.974268l730.048584 0L511.997952 268.025732',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover'
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
            }
          }
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
.footer-wraper {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
#total-users-chart {
  width: 100%;
  height: 100%;
}
</style>
