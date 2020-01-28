<template>
  <div class="admin">
    <span class="subheading grey--text" style="font-size: 18px">Admin</span>
    <span class="font-weight-bold" style="font-size: 18px"> / Dashboard</span>
    <v-card flat class="text-xs ma-3">
      <v-card-text>
        <h1>Dashboard</h1>
      </v-card-text>
    </v-card>
    <v-container class="my-5">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg4 v-for="person in misc" :key="person.name">
            <v-card flat class="text-xs ma-3">
              <v-card-text>
                <span class="subheading grey--text">{{ person.name }}</span><br/>
                <span style="font-size: 22px; font-weight: bold">{{ person.count }}</span>
                <v-icon class="right green--text">{{ person.icon }}</v-icon>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
    <v-card>
      <GChart
        type="LineChart"
        :data="chartData"
        :options="chartOptions"
      />
    </v-card>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "admin",
  components: {
    GChart,
  },
  data() {
    return {
    
      misc: [
        {name: 'Active Users', count:'512', icon: 'group'},
        {name: 'Total Sales', count:'$7,770', icon: 'shopping_cart'},
        {name: 'Change', count:'25%', icon: 'multiline_chart'}
      ],
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["01", 175, 40, 70 ],
        ["02", 169, 10, 10 ],
        ["03", 88, 80, 80 ],
        ["04", 10, 115, 140],
        ["05", 0, 190, 120],
        ["06", 100, 160, 0],
        ["07", 60, 40, 50],
        ["08", 80, 30, 35],
        ["09", 0, 200, 45]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
    }
  }
}
}
</script>

