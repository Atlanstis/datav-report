<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '@/components/top-view'
import SalesView from '@/components/sales-view'
import BottomView from '@/components/bottom-view'
import MapView from '@/components/map-view'

export default {
  name: 'Home',

  components: {
    MapView,
    TopView,
    SalesView,
    BottomView
  }
}
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
