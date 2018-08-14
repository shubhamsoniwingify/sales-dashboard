<template>
  <div>
    <select v-model="value" @change="onChange">
      <option value="all">All Sales Reps</option>
      <option v-for="name in names" :key="name" :value="name">{{ name }}</option>
    </select>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SalesFilter',
  data () {
    return {
      names: [],
      value: 'all'
    }
  },
  created: function () {
    axios
      .get(`${process.env.VUE_APP_API_ENDPOINT}/sales/names`)
      .then(response => {
        this.names = response.data
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {
    onChange: function (event) {
      this.$emit('input-changed', this.value)
    }
  }
}
</script>
<style scoped>
  div {
    background-color: white;
    padding: 10px;
    height: 50px;
  }

  select {
    border: 0px;
    outline: 0px;
    background-color: white;
    margin-top: 7px;
  }

  option {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    opacity: 0.5;
    color: #2c3e50;
  }
</style>
