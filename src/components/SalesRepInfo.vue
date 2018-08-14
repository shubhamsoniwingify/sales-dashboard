<template>
  <div class="data-container" :style="{ backgroundColor: backgroundColor }">
    <div class="name">{{ salesRep.name }}</div>
    <div class="info-container">
      <span class="info">New MRR</span>
      <span class="count">{{ salesRep.mrr }}</span>
    </div>
    <div class="info-container">
      <span class="info">New Logos</span>
      <span class="count">{{ salesRep.logos }}</span>
    </div>
    <div class="info-container">
      <span class="info">Demo Calls</span>
      <span class="count">{{ salesRep.calls }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SalesRepInfo',
  props: {
    salesRep: {
      type: Object,
      required: true
    },
    backgroundColor: String
  }
}
</script>
<style scoped>
  .data-container {
    width: 100% ;
    padding: 18px 20px 0px 20px;
    border-radius: 3px;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    background-image: url('../assets/winner.png');
    background-repeat: no-repeat;
    background-color: black;
    background-position-x: center;
    background-position-y: bottom;
  }
  .name {
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
  }
  .info-container {
    display: inline-block;
    width: 100%;
  }
  .info {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    float: left;
    padding-top: 15px;
  }
  .count {
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    float: right;
  }
</style>
