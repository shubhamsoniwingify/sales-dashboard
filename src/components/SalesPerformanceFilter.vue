//todo: filters can be made into a common component
<template>
  <div>
    <ul>
      <li><span @click="setActive('top')" :class="{ active: isActive('top') }">Top</span></li>
      <li><span @click="setActive('bottom')" :class="{ active: isActive('bottom') }">Bottom</span></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SalesPerformaceFilter',
  props: {
    selected: {
      type: String,
      validator: function (value) {
        return ['top', 'bottom'].indexOf(value) !== -1
      },
      required: true
    }
  },
  data () {
    return {
      selectedFilter: this.selected
    }
  },
  methods: {
    isActive (data) {
      if (this.selectedFilter === data) return true
      else return false
    },
    setActive (filter) {
      this.selectedFilter = filter
      if (filter === 'top') this.$emit('top')
      else this.$emit('bottom')
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
