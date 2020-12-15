<template>
  <ve-wordcloud
    height="100%"
    :data="chartData"
    :settings="chartSettings"
  ></ve-wordcloud>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ['word', 'count'],
        rows: [
          {
            word: '赛博朋克2077',
            count: 100 * Math.random()
          },
          {
            word: '最终幻想7',
            count: 100 * Math.random()
          },
          {
            word: '英灵殿',
            count: 100 * Math.random()
          },
          {
            word: '莱莎',
            count: 100 * Math.random()
          }
        ]
      },
      chartSettings: {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
