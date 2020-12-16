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
            count: Number((100 * Math.random()).toFixed(2))
          },
          {
            word: '最终幻想7',
            count: Number((100 * Math.random()).toFixed(2))
          },
          {
            word: '英灵殿',
            count: Number((100 * Math.random()).toFixed(2))
          },
          {
            word: '莱莎',
            count: Number((100 * Math.random()).toFixed(2))
          }
        ]
      },
      chartSettings: {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
