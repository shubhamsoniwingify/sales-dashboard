<template>
  <div class="header">
    <a href="#default" class="logo">
      <img src="../assets/logo.png" alt="LocusNine">
    </a>
    <div class="header-right">
      <span>SALES DASHBOARD</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
  .header-right {
    float: right;
    margin-top: 13px;
  }

  .header-right span {
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #231f20;
  }
</style>
