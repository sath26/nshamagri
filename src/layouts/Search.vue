 <template>
  <!-- <q-input
    icon="search"
    inverted
    v-model="searchBox"
    color="light-2"
    clearable
    placeholder="Searching for...."
    class="search-box q-mr-sm"
  /> -->
  <q-input dark dense standout debounce="500" v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
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