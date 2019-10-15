 <template>
  <div>
    <!-- this view put header and footer fixed but tab is not fixed yet-->
      <q-header :reveal="headerReveal">
        <q-toolbar class="navBar">
          <q-btn
            flat
            round
            style="font-size: 1rem;"
            color="white"
            icon="menu"
            @click="left = !left"
            class="side-menu_btn q-mr-sm"
          /></q-btn>
          <div class="logo-container">
            <img src="\statics\logo\logo-sm.svg" alt="Shamagri Logo" class="vertical-middle shamagri-logo q-pa-xs">
          </div>
          <q-toolbar-title class="txtShamagri">shamagri</q-toolbar-title>
          <s-search class="component-search-desktop"></s-search>
          <!-- <q-btn flat round color="grey-1" icon="search" 
          v-modal="mobileSearchBoxToggle"  @click="mobileSearchBoxToggle = !mobileSearchBoxToggle" 
          class="search-box_toggle-btn"></q-btn> -->
          <s-create class="q-px-sm"></s-create>
          <s-notification class="q-px-sm"></s-notification>
          <q-btn flat color="white" class="q-mr-sm profile-btn" to="/profile"><q-tooltip><strong>User profile</strong></q-tooltip><img src="statics\icons\User-icon.svg" alt="User-icon"></img></q-btn>
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
<q-drawer
           v-model="left"
          :width="200"
          :breakpoint="500"
          show-if-above
          bordered
          content-class="bg-grey-3"
        >
          <q-scroll-area class="fit">
            <q-list v-for="(menuItem, index) in menuList" :key="index">
              <q-item class="side-menu_items" active-class="bg-teal text-white" :to="menuItem.route" clickable :active="menuItem.label === 'Outbox'" exact>
                <q-item-section avatar>
                  <img v-if="menuItem.iconSrc" :src="menuItem.iconSrc" alt="Icon" width="28" height="28">
                  <q-icon :name="menuItem.icon" ></q-icon>
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
             <q-separator v-if="menuItem.separator"></q-separator>
            </q-list>
             <q-separator></q-separator>
            <q-list>
              <q-item class="side-menu_items text-red-8 " to="/landing_page">
                <q-item-section avatar>
                  <q-icon name="logout"></q-icon>
                </q-item-section>
                <q-item-section>
                  Logout
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import SSearch from "./Search.vue";
import SCreate from "./Create.vue";
import SNotification from "./Notification.vue";

// import quotation-icon from  ;
// import category-icon from ;
// import unit-icon from ;
// import bought-icon from ;
// import sold-icon from ;

export default {
  components: {
    SSearch,
    SNotification,
    SCreate,
  },
  name: "SHeader",
  data() {
    return {
      changeTheme: false,
      searchBox: "",
      mobileSearchBoxToggle: false,
      drawer:true,
      menuList : [
  
  {
    icon: 'home',
    label: 'Home',
    route: '/',
    separator: false
  },
   {
    icon: 'face',
    label: 'Profile',
    route: '/profile',
    separator: true
  },
  {
    iconSrc: "statics/icons/Quotation-icon.svg",
    label: 'Quotation',
    route: '/quotation',
    separator: false
  },
  {
    iconSrc: 'statics/icons/category-icon.svg',
    label: 'Category',
    route: '/category',
    separator: false
  },
 {
    iconSrc: 'statics/icons/unit-icon.svg',
    label: 'Unit',
    route: '/unit',
    separator: true
  },
  {
    iconSrc: 'statics/icons/bought-icon.svg',
    label: 'Bought',
    route: '/payment_bought',
    separator: false
  },
  {
    iconSrc: './statics/icons/sold-icon.svg',
    label: 'Sold',
    route: '/payment_sold',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    route: '/settings',
    separator: false
  }
]
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
  @import '..\css\layouts-style\header'

</style>

 

