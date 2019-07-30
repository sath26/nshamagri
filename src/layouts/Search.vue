 <template>
  <div class="container">
      <q-input dark dense standout debounce="500" v-model="text" input-class="text-right" class="q-ml-md search-box">
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
    </q-input>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "SSearch",
  data() {
    return {
      changeTheme: false,
      searchBox: "",
        text: ''
    };
  },
  computed: {}
};
</script>

