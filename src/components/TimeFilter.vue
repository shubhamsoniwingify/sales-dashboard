<template>
  <ul>
    <li><span @click="setActive('today')" :class="{ active: isActive('today') }">Today</span></li>
    <li><span @click="setActive('week')" :class="{ active: isActive('week') }">Last Week</span></li>
    <li><span @click="setActive('month')" :class="{ active: isActive('month') }">Last Month</span></li>
    <li><span @click="setActive('quarter')" :class="{ active: isActive('quarter') }">This Quarter</span></li>
    <li><span @click="setActive('year')" :class="{ active: isActive('year') }">This Year</span></li>
  </ul>
</template>
<script>
export default {
  name: 'TimeFilter',
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedFilter: this.selected
    }
  },
  methods: {
    isActive (filter) {
      if (this.selectedFilter === filter) return true
      else return false
    },
    setActive (filter) {
      this.selectedFilter = filter
    }
  }
}
</script>
<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    margin-bottom: 20px;
  }

  li {
    float: left;
    cursor: pointer;
  }

  li span {
    display: block;
    color: #2c3e50;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    text-transform: uppercase;
    opacity: 0.5;
  }

  li span:hover {
    border-bottom: 1px solid #2196f3;
  }

  .active {
    color: #2196f3;
    border-bottom: 1px solid #2196f3;
  }
</style>
