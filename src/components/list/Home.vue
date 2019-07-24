/* 
   explain what we do in the best way possible
   opened or closed
   
 */
 <template>
  <q-layout view="hHh LpR lFf" >
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container class="q-pa-lg q-my-lg">
      <q-page padding>
        <s-header></s-header>
        <div class="content-wrapper">
          <div class="row card-container q-mb-md">
            <q-card inline class="my-card col q-my-sm">
              <div>
                <q-card-section class="relative-position">
                  <div class="ellipsis">Expenses(March)</div>
                </q-card-section>
                <q-card-section>5000</q-card-section>
              </div>
            </q-card>
            <q-separator inset></q-separator>
            <q-card inline class="my-card col q-my-sm">
              <div>
                <q-card-section class="relative-position">
                  <div class="ellipsis">Sales(March)</div>
                </q-card-section>
                <q-card-section>5000</q-card-section>
              </div>
            </q-card>
            <q-separator inset></q-separator>
            <q-card inline class="my-card col q-my-sm">
              <div>
                <q-card-section class="relative-position">
                  <div class="ellipsis">Profit(March)</div>
                </q-card-section>
                <q-card-section>5000</q-card-section>
              </div>
            </q-card>
          </div>
         
            <div class="chart row">
               <div class="col-12" v-if="show">
              <apexchart width="100%" height="500" :options="chartOptions" :series="series" />
               </div>
            </div>
          
        </div>
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
mounted() {
    this.$nextTick(() => { this.show = true })
  },
  computed: {},
  data: function() {
    return {
      show: false,
      window: {
        width: 0
      },
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        tooltip: {
          fixed: {
            enabled: false,
            position: "top"
          }
        }
      },
      series: [
        {
          name: "Expenses",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Sales",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
* {
  box-sizing: border-box;

  .my-card {
    width: 100%;

    @media screen and (max-width: 1214px) {
      width: 31%;
    }

    @media screen and (max-width: 601px) {
      width: 100%;
    }
  }
}
</style>


