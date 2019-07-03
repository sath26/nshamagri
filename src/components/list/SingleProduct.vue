/* 
Product name
Category
brand
Stock change (depending on the stock finishes the list goes away)
    Stock left
    Expiration left
    Price
    purchased from
    date of purchase
features
usecases
 */
 <template>
  <q-layout view="hHh LpR lFf">
    <q-page-container>
      <s-header></s-header>

      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list>
            <q-collapsible
              image="statics/mountains.jpg"
              label="Wai Wai(click here to go to single product)"
              sublabel="Rs 20"
              icon-toggle
            >
              <div class="ellipsis">Type: Food and Beverages</div>
              <div class="ellipsis">Brand: Chaudhary Group</div>
              <q-btn flat color="secondary" v-close-overlay>
                <q-icon name="edit"/>
              </q-btn>
              <q-btn flat color="deep-orange" v-close-overlay>
                <q-icon name="delete"/>
              </q-btn>
            </q-collapsible>
          </q-list>
          <q-list highlight>
            <q-item to="/enterprise_stock">
              <q-item-side avatar="statics/boy-avatar.png"/>
              <q-item-main label="RajKumar Bogati Kirana Pasal" label-lines="1"/>
              <q-item-side right stamp="1 min"/>
            </q-item>
            <q-item>
              <q-item-side avatar="statics/guy-avatar.png"/>
              <q-item-main label="Pawan Kirana" label-lines="1"/>
              <q-item-side right stamp="3 min"/>
            </q-item>
            <q-item>
              <q-item-side avatar="statics/linux-avatar.png"/>
              <q-item-main label="Vaiya ko Furniture Pasal" label-lines="1"/>
              <q-item-side right stamp="1 hr"/>
            </q-item>
            <q-item>
              <q-item-side avatar="statics/mountains.jpg"/>
              <q-item-main label="RajKumar Bogati Kirana Pasal" label-lines="1"/>
              <q-item-side right stamp="1 day"/>
            </q-item>
          </q-list>
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

// import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  },
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nemo minus dolore facere saepe molestias, fugiat officia aspernatur expedita pariatur, accusantium hic exercitationem perspiciatis voluptate possimus nobis temporibus ipsa officiis!"
    };
  }
};
</script>

<style lang="stylus" scoped>
</style>


