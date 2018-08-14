<template>
  <div>
    <img src="../assets/funnel.png" alt="funnel" width="100%">
    <div class="leads data-container">
      <div class="heading">Lead In</div>
      <div class="data">{{leads}}</div>
    </div>
    <div class="contacts data-container">
      <div class="heading">Contact Made</div>
      <div class="data">{{calls}}</div>
    </div>
    <div class="needs data-container">
      <div class="heading">Needs Defined</div>
      <div class="data">{{needs}}</div>
    </div>
    <div class="proposals data-container">
      <div class="heading">Proposals Made</div>
      <div class="data">{{proposals}}</div>
    </div>
    <div class="negotiations data-container">
      <div class="heading">Negotiations Started</div>
      <div class="data">{{negotiations}}</div>
    </div>
    <div class="won data-container">
      <div class="won-heading">WON</div>
      <div class="data">{{won}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SalesFunnel',
  props: {
    leads: Number,
    calls: Number,
    needs: Number,
    proposals: Number,
    negotiations: Number,
    won: Number
  }
}
</script>
<style scoped>
  .leads {
    top: 8px;
    left: 45%;
  }
  .contacts {
    top: 99px;
    left: 40%;
  }
  .needs {
    top: 186px;
    left: 40%;
  }
  .proposals {
    left: 39%;
    top: 270px;
  }
  .negotiations {
    left: 37%;
    top: 360px;
  }
  .won {
    left: 40%;
    top: 437px;
  }
  .data-container {
    position: absolute;
    text-align: center;
  }
  .heading {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }
  .won-heading {
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    color: #ffffff;
    font-weight: 700;
  }
  .data {
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #ffffff;
    margin-top: -12px;
  }
</style>
