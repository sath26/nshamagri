 <template>
    <div class="container">
      <q-toolbar class="navbar">
          <div class="logo-container">
            <img src="\statics\logo\logo-sm.svg" alt="Shamagri Logo" class="shamagri-logo vertical-middle q-pa-xs">
          </div>
          <q-toolbar-title class="text-title">Shamagri</q-toolbar-title>
         <q-btn outline color="white" class="login--btn" to="/login">Login</q-btn>
      </q-toolbar>
      <div class="intro-section">
        <div class="intro-text q-px-lg">
          <p class="intro-head-text">your <span>business</span> our assist</p>
          <p class="intro-body-text">Welcome to Shamagri, a simple resource management app <br class="p-breaker"> 
developed to help grow and maintain all businesses <br class="p-breaker"> and fulfil all customer needs. </p>
            <div class="get-started-section">
              <div class="email-submit">
                <q-btn size="lg" class="shadow-1 q-px-xl" label="Get Started" color="teal-7"></q-btn>
                <div class="text-caption sub-header q-pa-sm">Try Shamagri for free !</div>
              </div>
            </div>
        </div>
        <img src="\statics\img\Landing-page-bg.png" class="web-bg_img" alt="Background-img-1">
        <img src="\statics\img\devices-graphics@2x.png" class="devices_img" alt="Background-img-1">
        <img src="\statics\img\landing-page-mobile-bg.png" class="mobile-bg_img" alt="Background-img-1">
      </div>
      <!-- More info btn -->
      <div :class="vmbc" >
        <h5>Wanna learn more?</h5>
        <p>scroll down</p>
        <a v-on:click="changeScroll"><img class="arrow-down_icon" src="statics\icons\arrow-down_icon.svg" alt="arrow down icon">
</a>  
      </div>
      <!-- INFO CARDS SECTION -->
      <section id="infoCards" class="info-cards q-pa-lg">
        <div class="text-h4 text-grey-2 infoCards-header-text q-my-xl">Finding product and services couldn't get any easier</div>
        <div class="cards-wrapper q-my-xl">
          <q-card class="info-card info-card_invoice q-ma-xl">
            <div class="graphics_container">
                <img src="statics/img/Invoice-graphics.png" alt="Invoice graphics">
            </div>
              <q-card-section class="info-text">
                <h5>Invoice</h5>
                The main highlight of Shamagri is Invoices.
                We provide this legal document before or after the supply of goods or services.
              </q-card-section>
        </q-card>
        <q-card class="info-card info-card_invoice q-ma-xl">
         <div class="graphics_container search-graphics_container">
            <img class="search-graphics" src="statics/img/search-graphics.png" alt="search graphics">
         </div>
          <q-card-section class="info-text">
            <h5>Optimized search</h5>
            Quick and easy search of any products or services by categorization and optimization. 
          </q-card-section>
        </q-card>
        <q-card class="info-card info-card_quotation q-ma-xl">
         <div class="quotation-graphics_container">
            <img src="statics\img\quotation-graphics.png" alt="quotation graphics">
         </div>
          <q-card-section class="info-text">
            <h5>Quotation</h5>
            Get all the right quotations for your product or service.
          </q-card-section>
        </q-card>
        </div>
      </section>
      <l-footer></l-footer>
    </div>
</template>
<script>
import LFooter from "./LFooter.vue"
export default {
  components : {
    LFooter
  },
  data() {
    return {
      vmbc:["learn-more_btn"],
    };
  },
  methods: {
    scrollValue(){
      if(window.scrollY > 600){
        this.vmbc.push("hideBtn")
      }else{
        this.vmbc.splice(1)
      }
    },
    changeScroll(){
      window.scrollTo({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
  document.addEventListener('scroll', this.scrollValue)
}
};
</script>
<style lang="stylus" scoped>
  @import '..\css\components-style\landing-page.styl'
  // @import '..\src\css\layouts-style\header.styl'
</style>  

 
