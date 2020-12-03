<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">34,234</div>
                <v-echarts :options="searchUserOptions"></v-echarts>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">124,864</div>
                <v-echarts :options="searchNumOptions"></v-echarts>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column label="排名" prop="rank"></el-table-column>
                <el-table-column
                  label="关键字"
                  prop="keyWord"
                ></el-table-column>
                <el-table-column
                  label="总搜索量"
                  prop="count"
                ></el-table-column>
                <el-table-column
                  label="搜索用户数"
                  prop="users"
                ></el-table-column>
              </el-table>
              <el-pagination
                layout="prev,pager,next"
                :total="100"
                :page-size="4"
                background
                @current-change="onCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioValue" size="small">
                <el-radio-button label="catogory">品类</el-radio-button>
                <el-radio-button label=" ">商品</el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-echarts :options="pieChartOptions"></v-echarts>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchUserOptions: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [55, 34, 67, 23, 67, 23, 56, 33, 56, 88, 100, 142],
            areaStyle: {
              color: 'rgba(95, 187, 255, .5)'
            },
            lineStyle: {
              color: 'rgb(95, 187, 255)'
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
      },
      searchNumOptions: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [55, 67, 43, 55, 77, 99, 123, 56, 78, 33, 88, 44, 100, 45],
            areaStyle: {
              color: 'rgba(95, 187, 255, .5)'
            },
            lineStyle: {
              color: 'rgb(95, 187, 255)'
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
      },
      tableData: [
        { id: 1, rank: 1, keyWord: 'TA', count: 100, users: 90, range: '90%' },
        { id: 2, rank: 2, keyWord: 'TB', count: 100, users: 90, range: '90%' },
        { id: 3, rank: 3, keyWord: 'TP', count: 100, users: 90, range: '90%' },
        { id: 4, rank: 4, keyWord: 'ST', count: 100, users: 90, range: '90%' }
      ],
      radioValue: 'catogory',
      pieChartOptions: {}
    }
  },

  mounted() {
    this.renderPieChart()
  },

  methods: {
    onCurrentChange(page) {},
    renderPieChart() {
      const mockData = [
        {
          legendName: '粉米粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#e7e702'
          },
          name: '粉米粥店 | 15.40%'
        },
        {
          legendName: '简餐便当',
          value: 97,
          percent: '22.30%',
          itemStyle: {
            color: '#8d7fec'
          },
          name: '简餐便当 | 22.30%'
        },
        {
          legendName: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle: {
            color: '#5085f2'
          },
          name: '汉堡披萨 | 21.15%'
        }
      ]
      this.pieChartOptions = {
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: '320',
            x: '34.5%',
            y: '42.5%',
            textAlign: 'center',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            }
          }
        ],
        series: [
          {
            type: 'pie',
            name: '品类分布',
            data: mockData,
            label: {
              normal: {
                show: true,
                position: 'outer',
                formatter: params => {
                  return params.data.legendName
                }
              }
            },
            center: ['35%', '50%'],
            radius: ['45%', '60%'],
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true
              }
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 4,
              borderColor: '#fff'
            }
          }
        ],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: params => {
            return (
              `${params.seriesName}<br />` +
              `${params.marker}${params.data.legendName}<br />` +
              `数量：${params.data.value}<br />` +
              `占比：${params.data.percent}`
            )
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding-right: 10px;
    }
    &:last-child {
      padding-left: 10px;
    }
    .title-wrapper {
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
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
