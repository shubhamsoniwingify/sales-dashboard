<template>
  <div id='app'>
    <div class="container">
      <Header class="col-lg-12"
      style="margin-bottom: 20px; padding-top: 20px;"
      />
      <TimeFilter
      class="col-lg-12"
      selected="today"
      />
      <SalesFilter class="col-lg-8 sales-filter" style="padding-right: 816px"
      @input-changed="salesRepChanged"/>
      <SalesPerformanceFilter
      class="col-lg-3 no-padding"
      style="margin-left:28px;"
      selected="top"
      @top="getSalesRepData('top')"
      @bottom="getSalesRepData('bottom')"
      />
      <div class="col-lg-6">
        <SalesFunnel
        :leads="leads"
        :calls="calls"
        :needs="needs"
        :proposals="proposals"
        :negotiations="negotiations"
        :won="won"
        />
      </div>
      <div class="col-lg-3 no-padding">
        <InfoCard
        image="ico-calls.png"
        data="CALLS"
        :info="calls"
        />
        <InfoCard
        image="ico-wins.png"
        data="WINS"
        :info="won"
        />
        <InfoCard
        image="ico-revenue.png"
        data="INCREMENTED REVENUE"
        :info="mrr"
        />
      </div>
      <div class="col-lg-3 no-padding">
        <SalesRepInfo
          v-for='(salesRep, index) in salesReps'
          :key='salesRep.id'
          :salesRep='salesRep'
          :backgroundColor="getBackgroundColor(index)"
          style="margin-bottom: 40px"
        />
      </div>
    </div>
    <div class="col-lg-12 data-table">
      <div class="col-lg-12 pull-left details no-padding">Details</div>
      <Vuetable
      :api-url="`${apiUrl}/leads/read`"
      :fields="fields"
      :row-class="rowClass"
      data-path=""
      />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TimeFilter from './components/TimeFilter.vue'
import SalesFilter from './components/SalesFilter.vue'
import SalesPerformanceFilter from './components/SalesPerformanceFilter.vue'
import SalesRepInfo from './components/SalesRepInfo.vue'
import InfoCard from './components/InfoCard.vue'
import SalesFunnel from './components/SalesFunnel.vue'
import Vuetable from 'vuetable-2'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Header,
    TimeFilter,
    SalesFilter,
    SalesPerformanceFilter,
    SalesRepInfo,
    SalesFunnel,
    Vuetable,
    InfoCard
  },
  created: function () {
    axios.get(`${process.env.VUE_APP_API_ENDPOINT}/sales/info/all`)
      .then(response => {
        this.setSalesData(response.data)
      })
      .catch(err => {
        console.error(err)
      })
    axios
      .get(`${process.env.VUE_APP_API_ENDPOINT}/sales/read`)
      .then(response => {
        response.data.sort(this.sortDesc)
        this.salesReps = response.data.slice(0, 3)
      })
      .catch(err => {
        console.error(err)
      })
  },
  data: function () {
    return {
      salesReps: [],
      apiUrl: process.env.VUE_APP_API_ENDPOINT,
      fields: [
        {
          name: 'sales_rep',
          title: 'Sales Rep'
        },
        {
          name: 'date',
          title: 'Date'
        },
        {
          name: 'client',
          title: 'Clint'
        },
        {
          name: 'primary_contact',
          title: 'Primary Contact Person'
        },
        {
          name: 'title',
          title: 'Title'
        },
        {
          name: 'vertical',
          title: 'Vertical'
        },
        {
          name: 'meeting_location',
          title: 'Meeting Location'
        },
        {
          name: 'interaction_purpose',
          title: 'Purpose of Interaction'
        },
        {
          name: 'outcome',
          title: 'Outcome and Remarks'
        },
        {
          name: 'status',
          title: 'Engagement Status'
        }
      ],
      leads: 0,
      calls: 0,
      needs: 0,
      proposals: 0,
      negotiations: 0,
      won: 0,
      mrr: 0
    }
  },
  methods: {
    getBackgroundColor (index) {
      if (index === 0) return '#1976D2'
      if (index === 1) return '#2196f3'
      if (index === 2) return '#64b5f6'
    },
    rowClass (data, index) {
      if (data.status === 'Won') return 'green-background'
      if (data.status === 'Lost') return 'red-background'
    },
    sortAsc: function (a, b) {
      const mrra = a.mrr
      const mrrb = b.mrr
      let comparison = 0
      if (mrra > mrrb) {
        comparison = 1
      } else if (mrra < mrrb) {
        comparison = -1
      }
      return comparison
    },
    sortDesc: function (a, b) {
      const mrra = a.mrr
      const mrrb = b.mrr
      let comparison = 0
      if (mrra < mrrb) {
        comparison = 1
      } else if (mrra > mrrb) {
        comparison = -1
      }
      return comparison
    },
    getSalesRepData (order) {
      axios
        .get(`${process.env.VUE_APP_API_ENDPOINT}/sales/read`)
        .then(response => {
          order === 'top' ? response.data.sort(this.sortDesc) : response.data.sort(this.sortAsc)
          this.salesReps = response.data.slice(0, 3)
        })
        .catch(err => {
          console.error(err)
        })
    },
    setSalesData (data) {
      this.leads = data.leads
      this.calls = data.calls
      this.needs = data.needs
      this.proposals = data.proposals
      this.negotiations = data.negotiations
      this.won = data.won
      this.mrr = data.mrr
    },
    salesRepChanged (salesRep) {
      this.getSalesData(salesRep)
    },
    getSalesData (salesRep) {
      axios.get(`${process.env.VUE_APP_API_ENDPOINT}/sales/info/${salesRep}`)
        .then(response => {
          if (salesRep === 'all') this.setSalesData(response.data)
          else this.setSalesData(response.data[0])
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.no-padding {
  padding: 0px !important;
}
.sales-filter {
  margin-bottom: 40px;
}
.details {
  font-size: 24px;
  font-weight: 400;
  color: #231f20;
  margin-top: 20px;
}
.data-table {
  background-color: #ffffff;
}
td {
  padding: 20px;
}
th {
  font-size: 12px;
  background-color: #ffffff;
}
td {
  font-size: 12px;
}
tr:nth-child(odd) {
  background-color: #f8f9fb;
}
.red-background {
  background-color: #fff2f2 !important;
}
.green-background {
  background-color: #e6f5e6 !important;
}
</style>
