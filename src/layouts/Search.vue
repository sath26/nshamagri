 <template>
  <div class="container">
      <q-input @focus="searchPopout = true" @blur="searchPopout = false" dark dense standout debounce="500" v-model="text" input-class="text-right" class="q-ml-md search-box">
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
      </q-input>
        <div v-if="searchPopout" class="search-extension">
          <q-card>
            <q-card-section>
              <div class="text-h6 text-grey-8">History record</div>
            </q-card-section>
          </q-card>
          <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card">
              <q-card-section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae atque et enim incidunt. Doloribus voluptates maxime perferendis nam non?
              </q-card-section>
            </q-card>
        
            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
        
              <q-card-section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae atque et enim incidunt. Doloribus voluptates maxime perferendis nam non?
              </q-card-section>
            </q-card>
        
            <q-card dark bordered class="bg-grey-9 my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
        
              <q-separator dark inset ></q-separator>
        
              <q-card-section>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum officia delectus cumque a suscipit blanditiis voluptatibus sapiente? Eius, sed.
              </q-card-section>
            </q-card>
        
            <q-card flat bordered class="my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
              </q-card-section>
        
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
        
              <q-separator inset ></q-separator>
        
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </div>
        </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SSearch",
  data() {
    return {
      searchPopout: false,
      searchBox: "",
        text: ''
    };
  },
  // methods:{
  //   al(){
  //     this.searchPopout = true;
  //   }
  // },
  computed: {}
};
</script>

<style lang="stylus" scoped>
  .search-extension
    width 100%
    height 100%
    position absolute
    top 80px
    left 0
    transition all 3s ease 
    .my-card
      width 100%
      max-width 250px
      color black
</style>