/* 
   explain what we do in the best way possible
   opened or closed
   
 */
 <template>
    <q-layout view="lhh LpR lff" container>
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container class="q-pa-lg q-my-lg">
      <s-header></s-header>
      <div class="row">
        <q-card inline class="col my-card q-ma-sm">
          <div class="q-pa-sm">
              <q-card-title class="relative-position">
                <div class="ellipsis">Expenses(March)</div>
              </q-card-title>
            <q-card-main>5000</q-card-main>
          </div>
        </q-card>
        <q-card inline class="col my-card q-ma-sm">
          <div class="q-pa-sm">
            <q-card-title class="relative-position">
              <div class="ellipsis">Sales(March)</div>
            </q-card-title>
            <q-card-main>5000</q-card-main>
          </div>
        </q-card>
        <q-card inline class="col my-card q-ma-sm">
          <div class="q-pa-sm">
            <q-card-title class="relative-position">
            <div class="ellipsis">Profit(March)</div>
          </q-card-title>
          <q-card-main>5000</q-card-main>
          </div>
        </q-card>
       </div>   
        <q-page>
          <q-card class="bigger q-ma-sm">
            <apexchart type="bar" height="500" :options="chartOptions" :series="series"/>
          </q-card>
        </q-page>
    </q-page-container>
    <s-footer></s-footer>
  </q-layout>
</template>
<script>
//consists of buyers and sellers
import SHeader from "../../layouts/Header";
import SFooter from "../../layouts/Footer";
import VueApexCharts from "vue-apexcharts";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter,
    apexchart: VueApexCharts
  },

  computed: {},
  data: function() {
    return {
      series: [
        {
          name: "Expenses",
          data: [44, 55, 41, 64, 22, 43, 21, 55, 65, 23, 56, 12]
        },
        {
          name: "Sales",
          data: [53, 32, 33, 52, 13, 44, 32, 32, 43, 53, 64, 23]
        }
      ],
      chartOptions: {
        title: {
          text: "Sales and Expenses per month",
          margin: 10,
          floating: true,
          style: {
            fontSize: "16px",
            color: "#fff"
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"]
          }
        },
        stroke: {
          show: false,
          width: 1,
          colors: ["#fff"]
        },

        xaxis: {
          categories: [
            "jan",
            "feb",
            "march",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec"
          ]
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
*{
  box-sizing:border-box;
}
  .my-card
      width 32%
      @media screen and (max-width: 1214px) 
       width 31%
      @media screen and (max-width: 601px) 
       width 100%
      
</style>


