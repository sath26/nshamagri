 <template>
    <div class="container">
      <q-toolbar class="navbar">
          <div class="logo-container">
            <img src="\assets\logo\logo-sm.svg" alt="Shamagri Logo" class="shamagri-logo vertical-middle q-pa-xs">
          </div>
          <q-toolbar-title class="text-title">Shamagri</q-toolbar-title>
         <q-btn outline color="white" class="q-mr-sm" to="/login">Login</q-btn>
      </q-toolbar>
      <div class="intro-section">
        <div class="intro-text q-px-lg">
          <h5>your <span>business</span> our assist</h5>
          <p>Welcome to Shamagri, a simple resource management app <br class="p-breaker"> 
developed to help grow and maintain all businesses <br class="p-breaker"> and fulfil all customer needs. </p>
            <div class="get-started-section">
              <div class="text-caption sub-header">Try Shamagri for free!</div>
              <div class="email-submit">
                <q-btn size="lg" class="shadow-1 q-px-xl" label="Get Started" color="teal-7"></q-btn>
              </div>
            </div>
        </div>
        <img src="\assets\img\Landing-page-bg.png" class="web-bg_img" alt="Background-img-1">
        <img src="\assets\img\devices-graphics@2x.png" class="devices_img" alt="Background-img-1">
        <img src="\assets\img\landing-page-mobile-bg.png" class="mobile-bg_img" alt="Background-img-1">
      </div>
      <div class="learn-more_btn">
        <h5>Wanna learn more?</h5>
        <a href="#infoCards"><img class="arrow-down_icon" src="\assets\icons\arrow-down_icon.svg" alt="arrow down icon"></a>
      </div>
      <!-- INFO CARDS SECTION -->
      <section id="infoCards" class="info-cards q-pa-lg">
        <q-card class="info-card info-card_invoice q-ma-lg">
         <div class="graphics_container">
            <img src="\assets\img\Invoice-graphics.png" alt="Invoice graphics">
         </div>
          <q-card-section class="info-text">
            <h5>Invoice</h5>
            The main highlight of Shamagri is Invoices.
            We provide this legal document before or after the supply of goods or services.
          </q-card-section>
        </q-card>
        <q-card class="info-card info-card_invoice q-ma-lg">
         <div class="graphics_container search-graphics_container">
            <img class="search-graphics" src="\assets\img\search-graphics.png" alt="Invoice graphics">
         </div>
          <q-card-section class="info-text">
            <h5>Optimized search</h5>
            Quick and easy search of any products or services by categorization and optimization. 
          </q-card-section>
        </q-card>
        <q-card class="info-card info-card_invoice q-ma-lg">
         <div class="graphics_container">
            <img src="\assets\img\Invoice-graphics.png" alt="Invoice graphics">
         </div>
          <q-card-section class="info-text">
            The main highlight of Shamagri is Invoices.
            We provide this legal document before or after the supply of goods or services.
          </q-card-section>
        </q-card>
      </section>
      <f-footer></f-footer>
    </div>
</template>
<script>
import FFooter from "./Footer.vue"
export default {
  components : {
    FFooter
  },
  data() {
    return {
    };
  }
};
</script>
<style lang="stylus" scoped>
  @import '..\css\components-style\landing-page.styl'
  // @import '..\src\css\layouts-style\header.styl'
</style>  

 
