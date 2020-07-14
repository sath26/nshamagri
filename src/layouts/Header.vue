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
        ></q-btn>
        <div class="logo-container">
          <img
            src="\statics\logo\logo-sm.svg"
            alt="Shamagri Logo"
            class="vertical-middle shamagri-logo q-pa-xs"
          />
        </div>
        <q-toolbar-title class="txtShamagri">shamagri</q-toolbar-title>
        <s-search class="component-search-desktop"></s-search>
        <!-- <q-btn flat round color="grey-1" icon="search" 
          v-modal="mobileSearchBoxToggle"  @click="mobileSearchBoxToggle = !mobileSearchBoxToggle" 
        class="search-box_toggle-btn"></q-btn>-->
        <s-create class="q-px-sm"></s-create>
        <s-notification class="q-px-sm"></s-notification>
        <q-btn flat color="white" class="q-mr-sm profile-btn" to="/profile" v-if="isAuthenticated">
          <q-tooltip>
            <strong>{{user.name}}</strong>
          </q-tooltip>
          <img :src=user.photoUrl alt="user" />
          <!-- <img src="statics\icons\User-icon.svg" alt="User-icon" /> -->
        </q-btn>
        <q-btn outline color="white" class="q-mr-sm" to="/login" v-else>Login</q-btn>
        <!-- notification is also available but i need number of notification on top of the icon or change in color  -->
      </q-toolbar>
      <div
        v-show="mobileSearchBoxToggle"
        v-bind:class="{nowActive: mobileSearchBoxToggle}"
        class="search-box-mobile_container row no-shadow"
      >
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
      :width="250"
      :breakpoint="500"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuList" :key="index">
          <q-item
            class="side-menu_items"
            active-class="bg-teal-7 text-white"
            :to="menuItem.route"
            clickable
            :active="menuItem.label === 'Outbox'"
            exact
          >
            <q-item-section>
              <q-avatar rounded size="42px">
                <img
                  class="side-menu-icon"
                  v-if="menuItem.iconSrc"
                  :src="menuItem.iconSrc"
                />
              <q-icon :name="menuItem.icon"></q-icon>
              </q-avatar>
            </q-item-section>
            <q-item-section class="q-pr-xl text-subtitle1" > {{ menuItem.label }}</q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator"></q-separator>
        </q-list>
        <q-separator></q-separator>
        <q-list>
          <q-item clickable class="side-menu_items text-red-8"  @click="logout()" >
            <q-item-section avatar >
              <q-icon name="logout" size="40px"></q-icon>
            </q-item-section>
            <q-item-section>Logout</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>
<script>

import SSearch from "./Search.vue";
import SCreate from "./Create.vue";
import SNotification from "./Notification.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { fauth } from "../store/service/firebase";
// import quotation-icon from  
// import category-icon from ;
// import unit-icon from ;
// import bought-icon from ;
// import sold-icon from ;

export default {
  components: {
    SSearch,
    SNotification,
    SCreate
  },
  name: "SHeader",
  created(){
    
     fauth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.userHello(user);
        // Store.dispatch('autoSignIn', user)
      } else {
        // No user is signed in.
      }
    });
  },
  data() {
    return {
      changeTheme: false,
      searchBox: "",
      mobileSearchBoxToggle: false,
      drawer: true,
      menuList: [
        {
          iconSrc: "statics/icons/home-icon.svg",
          label: "Home",
          route: "/",
          separator: false
        },
        {
          iconSrc: "statics/icons/profile-icon.svg",
          label: "Profile",
          route: "/profile",
          separator: true
        },
        {
          iconSrc: "statics/icons/quotation-icon.svg",
          label: "Quotation",
          route: "/quotation",
          separator: false
        },
        {
          iconSrc: "statics/icons/category-icon.svg",
          label: "Category",
          route: "/category",
          separator: false
        },
        {
          iconSrc: "statics/icons/unit-icon.svg",
          label: "Unit",
          route: "/unit",
          separator: true
        },
        {
          iconSrc: "statics/icons/bought-icon.svg",
          label: "Bought",
          route: "/payment_bought",
          separator: false
        },
        {
          iconSrc: "./statics/icons/sold-icon.svg",
          label: "Sold",
          route: "/payment_sold",
          separator: true
        },
        {
          iconSrc: "./statics/icons/setting-icon.svg",
          label: "Settings",
          route: "/settings",
          separator: false
        }
      ]
    };
  },
  computed: {
     ...mapGetters("auth", ["","loggedInuser"]),
    ...mapState("auth", ["user", "pic","isAuthenticated"]),
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
     ...mapGetters("layoutDemo", ["view"]),
    ...mapMutations("layoutDemo",["setToggleTheme","setLeft","setHeader"]),
    ...mapState("layoutDemo", [
      "headerReveal",
      "leftOverlay",
      "leftBehavior",
      "leftBreakpoint",
      //'rightOverlay', 'rightBehavior', 'rightBreakpoint',
      "scrolling"
    ])
  },
  methods: {
     ...mapActions("auth", ["userHello", "userSignOut"]),
    logout(){
      this.userSignOut()
    }
  }
};
</script>
<style lang="stylus" scoped>
  
  @import '..\css\layouts-style\header';

</style>

 

