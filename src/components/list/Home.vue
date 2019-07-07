/* 
   explain what we do in the best way possible
   opened or closed
   
 */
 <template>
    <q-layout view="hHh LpR lFf" container>
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container class="q-pa-lg q-my-lg">
      <s-header></s-header>
      <div class="row">
        <q-card inline class="col my-card q-ma-sm">
          <div class="q-pa-sm">
              <q-card-section class="relative-position">
                <div class="ellipsis">Expenses(March)</div>
              </q-card-section>
            <q-card-section>5000</q-card-section>
          </div>
        </q-card>
        <q-card inline class="col my-card q-ma-sm">
          <div class="q-pa-sm">
            <q-card-section class="relative-position">
              <div class="ellipsis">Sales(March)</div>
            </q-card-section>
            <q-card-section>5000</q-card-section>
          </div>
        </q-card>
        <q-card inline class="col my-card q-ma-sm">
          <div class="q-pa-sm">
            <q-card-section class="relative-position">
            <div class="ellipsis">Profit(March)</div>
          </q-card-section>
          <q-card-section>5000</q-card-section>
          </div>
        </q-card>
       </div>   
        <q-page>
          <q-card class="bigger q-ma-sm">
            <apexchart type="area" height="500" :options="chartOptions" :series="series"/>
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
          chartOptions: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        tooltip: {
            fixed: {
                enabled: false,
                position: 'top'
            }
        }
      }
      ,
      series: [{
          name: 'Expenses',
          data: [31, 40, 28, 51, 42, 109, 100]
      }, {
          name: 'Sales',
          data: [11, 32, 45, 32, 34, 52, 41]
      }],
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


