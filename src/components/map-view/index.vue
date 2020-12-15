<template>
  <div class="map-view">
    <div class="left">
      <v-echarts :options="options"></v-echarts>
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <liquid-fill></liquid-fill>
          </div>
        </template>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <word-cloud></word-cloud>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import mapStyle from './constants/map-style'
import { data, geoCoordMap } from './constants/data'
import LiquidFill from './components/liquid-fill'
import WordCloud from './components/word-cloud'

export default {
  components: {
    LiquidFill,
    WordCloud
  },

  data() {
    return {
      options: {}
    }
  },
  mounted() {
    this.options = {
      title: {
        text: '全国主要城市空气质量',
        left: 'center'
      },
      bmap: {
        key: 'bILYPpsC7KbhQvO52Tk3vMBkhU7PFpjp',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false,
        mapStyleV2: mapStyle
      },
      tooltip: {},
      series: [
        {
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: this.convertData(
            data
              .sort(function(a, b) {
                return b.value - a.value
              })
              .slice(6)
          ),
          encode: {
            value: 2
          },
          itemStyle: {
            color: 'purple'
          },
          symbolSize: function(val) {
            return val[2] / 10
          },
          label: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'bmap',
          data: this.convertData(
            data
              .sort(function(a, b) {
                return b.value - a.value
              })
              .slice(0, 6)
          ),
          symbolSize: function(val) {
            return val[2] / 10
          },
          encode: {
            value: 2
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          itemStyle: {
            color: 'purple',
            shadowBlur: 10,
            shadowColor: '#333'
          },
          zlevel: 1
        }
      ]
    }
  },
  methods: {
    convertData(data) {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    width: 80%;
    height: 600px;
    background: #fff;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 20px;
    }
    .chart-wrapper {
      width: 100%;
      height: 190px;
    }
  }
}
</style>
