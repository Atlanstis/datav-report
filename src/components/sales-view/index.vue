<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            class="sales-view-menu"
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="sale">销售额</el-menu-item>
            <el-menu-item index="visit">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group size="small" v-model="radioSelect">
              <el-radio-button :label="'today'">今日</el-radio-button>
              <el-radio-button :label="'week'">本周</el-radio-button>
              <el-radio-button :label="'month'">本月</el-radio-button>
              <el-radio-button :label="'year'">今年</el-radio-button>
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              class="sales-view-date-picker"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              size="small"
              unlink-panels
              :picker-options="pickerOption"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-echarts :options="chartOptions"></v-echarts>
          <div class="sales-view-list">
            <div class="sales-view-list-title">排行榜</div>
            <div class="list-item-wrapper">
              <div v-for="item in rankData" :key="item.no" class="list-item">
                <div :class="['item-no', item.no <= 3 ? 'top-no' : '']">
                  {{ item.no }}
                </div>
                <div class="item-name">{{ item.name }}</div>
                <div class="item-value">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'sale',
      radioSelect: 'today',
      date: [],
      pickerOption: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
              const end = new Date()
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 1)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 3)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      chartOptions: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [345, 556, 563, 675, 234, 675, 453, 565, 564, 784, 674, 234]
          }
        ],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [
        {
          no: 1,
          name: '莉娜',
          value: 345253
        },
        {
          no: 2,
          name: '敌法师',
          value: 345253
        },
        {
          no: 3,
          name: '圣堂刺客',
          value: 345253
        },
        {
          no: 4,
          name: '冰晶室女',
          value: 345253
        },
        {
          no: 5,
          name: '风行者',
          value: 345253
        },
        {
          no: 6,
          name: '卓尔游侠',
          value: 345253
        },
        {
          no: 7,
          name: '米娜拉',
          value: 345253
        }
      ]
    }
  },

  methods: {
    onMenuSelect() {}
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-list-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          padding: 6px 20px 6px 0;
          .item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .item-name {
            margin-left: 10px;
            color: #333;
            flex: 1;
          }
        }
      }
    }
  }
}
</style>
