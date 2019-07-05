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
          <!-- <q-btn flat round color="grey-1" icon="search" 
          v-modal="mobileSearchBoxToggle"  @click="mobileSearchBoxToggle = !mobileSearchBoxToggle" 
          class="search-box_toggle-btn"></q-btn> -->
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
          v-model="left"
           :width="200"
          :breakpoint="500"
          overlay
          show-if-above
          bordered
          content-class="bg-grey-3"
        >
          <q-scroll-area class="fit">
            <q-list v-for="(menuItem, index) in menuList" :key="index">
  
              <q-item clickable :to="menuItem.route" :active="menuItem.label === 'Home'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" ></q-icon>
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
  
             <q-separator v-if="menuItem.separator" ></q-separator>
  
            </q-list>
          </q-scroll-area>
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
      mobileSearchBoxToggle: false,
      menuList : [
  {
    icon: 'user',
    label: 'Profile',
    route: '/profile',
    separator: true
  },
  {
    icon: 'send',
    label: 'Home',
    route: '/home',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Goods',
    route: '/my_products',
    separator: false
  },
  {
    icon: 'error',
    label: 'Services',
    route: '/my_services',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Measurement',
    route: '/#',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Bought',
    route: '/payment_bought',
    separator: false
  },
  {
    icon: 'help',
    label: 'Sold',
    route: '/payment_sold',
    separator: true
  },
  {
    icon: 'logout',
    label: 'Logout',
    route: '/#',
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
@import '..\css\layouts-style\header.styl'

</style>

 

