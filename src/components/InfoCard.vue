<template>
  <div class="info-container">
    <div class="image">
      <img :src="require(`../assets/${image}`)">
    </div>
    <div class="data-container">
      <div class="data">{{ data }}</div>
      <div class="info">{{ info }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoCard',
  props: {
    image: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    info: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      imageSrc: `../assets/${this.image}`
    }
  }
}
</script>
<style scoped>
  .info-container {
    background-color: #ffffff;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
  }
  .data {
    font-weight: 500;
    font-size: 18px;
    color: #2c3e50;
    float: right;
  }
  .info {
    font-size: 48px;
    font-weight: 700;
    color: #2196f3;
  }
  .data-container {
    float: right;
    margin-right: 15px;
  }
  .info-container {
    display: inline-block;
    margin-bottom: 40px;
    border-radius: 3px
  }
  img {
    padding: 15px;
    margin-right: 160px;
  }
</style>
