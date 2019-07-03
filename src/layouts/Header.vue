 <template>
  <div>
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <transition
  enter-active-class="animated fadeIn"
  appear
>
      <q-header :reveal="headerReveal">
        <q-toolbar inverted class="navBar">
          <q-btn
            flat
            round
            style="font-size: 1.2rem;"
            color="white"
            icon="menu"
            @click="left = !left"
          />
          <img src="\assets\logo\logo-sm.svg" alt="Shamagri Logo" class="shamagri-logo q-px-sm q-py-xs">
          <q-toolbar-title class="txtShamagri">shamagri</q-toolbar-title>
          <s-search class="component-search-desktop"></s-search>
          <q-btn flat round color="grey-1" icon="search" 
          v-modal="mobileSearchBoxToggle"  @click="mobileSearchBoxToggle = !mobileSearchBoxToggle" 
          class="search-box_toggle-btn"></q-btn>
          <s-notification class="q-px-sm"></s-notification>
          <q-btn outline color="white" class="q-mr-sm" to="/login">Login</q-btn>
          <!-- notification is also available but i need number of notification on top of the icon or change in color  -->
        </q-toolbar>
        <div v-show="mobileSearchBoxToggle" v-bind:class="{nowActive: mobileSearchBoxToggle}"  class="search-box-mobile_container row no-shadow">
          <q-input
      icon="search"
      v-model="searchBox"
      color="light-2"
      clearable
      placeholder="Searching for...."
      class="search-box_mobile q-mr-sm no-shadow"
    />
        </div>
      </q-header>
    </transition>
    <q-drawer
      section="left"
      v-model="left"
      :overlay="leftOverlay"
      :behavior="leftBehavior"
      :breakpoint="leftBreakpoint"
      :content-class="$q.theme === 'mat' ? 'bg-blue-grey-8' : null"
    >
      <q-list dark no-border>
        <div to="/profile" class="profile-container q-mb-sm">
          <q-item to="/profile">
            <div class="profile-wrapper q-mx-auto">
              <div class="user-info-container">
                <q-icon name="account circle" size="3rem" color="white"/>
                <q-item-section label="Saugat Thapa" style="color:#fafafa" sublabel/>
              </div>
            </div>
          </q-item>
        </div>
        <q-item class="row">
          <q-item-section v-if="!themeToggle" color="white" class="col-10">
            <q-item>
              <q-item-section>
                <img src="..\assets\icons\night-icon.png" alt="Dark theme icon" class="icon-night">
              </q-item-section>Dark Theme
            </q-item>
          </q-item-section>
          <q-item-section v-if="themeToggle" color="white" class="col-10">Light Theme</q-item-section>
          <q-toggle v-model="themeToggle" color="white" class="btn-toggle col-2"/>
        </q-item>
        <q-item to="/home">
          <!-- <q-item-section icon="account circle"/> -->
          <q-item-section label="Home" sublabel/>
          <!-- <q-item-section right icon="thumb_up"/> -->
        </q-item>
        <q-separator/>
        <q-item to="/my_products">
          <!-- <q-item-section icon="account circle"/> -->
          <q-item-section label="Goods" sublabel/>
          <!-- <q-item-section right icon="thumb_up"/> -->
        </q-item>
        <q-item to="/my_services">
          <!-- <q-item-section icon="view_array"/> -->
          <q-item-section label="Services" sublabel/>
        </q-item>
        <q-item>
          <!-- <q-item-section icon="view_array"/> -->
          <q-item-section label="Measurement" sublabel/>
        </q-item>
        <q-separator/>
        <q-item-label header>Payment</q-item-label>
        <q-item to="/payment_bought">
          <!-- <q-item-section icon="pin_drop"/> -->
          <q-item-section label="Bought" sublabel/>
        </q-item>
        <q-item to="/payment_sold">
          <!-- <q-item-section icon="pin_drop"/> -->
          <q-item-section label="Sold" sublabel/>
        </q-item>
        <q-separator/>
        <q-item>
          <q-item-section label="Logout" style="color:#d34848" sublabel/>
        </q-item>
      </q-list>
      <!-- account circle and profile name should be button that leads to profile
          <q-item to="/showcase/demo/floating-action-button">
          <q-item-section icon="play_for_work"/> 
          <q-item-section label="Profile" sublabel/>
      </q-item>-->
    </q-drawer>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import SSearch from "./Search.vue";
import SNotification from "./Notification.vue";
export default {
  components: {
    SSearch,
    SNotification
  },
  name: "SHeader",
  data() {
    return {
      changeTheme: false,
      searchBox: "",
      mobileSearchBoxToggle: false
    };
  },
  computed: {
    header: {
      get() {
        return this.$store.state.layoutDemo.header;
      },
      set(val) {
        this.$store.commit("layoutDemo/setHeader", val);
      }
    },
    left: {
      get() {
        return this.$store.state.layoutDemo.left;
      },
      set(val) {
        this.$store.commit("layoutDemo/setLeft", val);
      }
    },
    themeToggle: {
      get() {
        return this.$store.state.layoutDemo.toggleTheme;
      },
      set(val) {
        this.$store.commit("layoutDemo/setToggleTheme", val);
      }
    },
    // ...mapGetters("layoutDemo", ["view"]),

    ...mapState("layoutDemo", [
      "headerReveal",
      "leftOverlay",
      "leftBehavior",
      "leftBreakpoint",
      //'rightOverlay', 'rightBehavior', 'rightBreakpoint',
      "scrolling"
    ])
  }
};
</script>
<style lang="stylus" scoped>
@import '..\css\layouts-style\header.styl'

</style>

 

