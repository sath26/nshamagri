/* from selected service category
    a list can appear with each rates
    category with list or category less list
    table is not necessary here
 */
 /* note:
Group Coaching	Duration
Course Completion 	1.5 months
Crash Course	1 month
Monthly Course	3 months (minimum)
  */
/* list heading
Course Completion	Amount
Teacher	
AS Level	Rs. 20,000 per subject
A2 Level	Rs. 20,000 per subject
A Level	Rs. 35,000 per subject
Tutor	
AS Level	Rs. 10,000 per subject
A2 Level	Rs. 10,000 per subject
A Level	Rs. 17,500 per subject

 */
 /* 
 Monthly Tuition	Amount
Teacher	
AS Level	Rs. 10,000 per subject
A2 Level	Rs. 10,000 per subject
A Level	Rs. 17,500 per subject
Tutor	
AS Level	Rs. 5,000 per subject
A2 Level	Rs. 5,000 per subject
A Level	Rs. 8,500 per subject

  */
  /* 
  Crash Course	Amount
Teacher	
AS Level	Rs. 15,000 per subject
A2 Level	Rs. 15,000 per subject
A Level	Rs. 25,000 per subject
Tutor	
AS Level	Rs. 7,500 per subject
A2 Level	Rs. 7,500 per subject
A Level	Rs. 12,500 per subject

   */
/* 
4 days a week or more	Amount
Teacher	Rs. 1,500/- per hour
Tutor	Rs. 750/- per hour

 */
/* 
4 days a week or more	Amount
Teacher	Rs. 1,500/- per hour
Tutor	Rs. 750/- per hour

 */
<template>
  <q-layout view="hHh LpR lFf">
    <!-- this view put header and footer fixed but tab is not fixed yet-->
    <q-page-container>
      <s-header></s-header>
      <q-page padding class="row justify-center">
        <div style="width: 500px; max-width: 90vw;">
          <q-list separator class="q-mb-sm">
            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>Course Completion</q-item-tile>
              </q-item-section>

              <q-item-section right>
                <q-btn flat color="secondary" v-close-overlay>
                  <q-icon name="add"/>
                </q-btn>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="negative" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class="q-mb-sm section-teacher">
            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>Teacher</q-item-tile>
              </q-item-section>

              <q-item-section right>
                <q-btn flat color="secondary" v-close-overlay>
                  <q-icon name="add"/>
                </q-btn>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="negative" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item-separator/>
            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>AS Level</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-item-tile label>20000</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="negative" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>

            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>A2 Level</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-item-tile label>20000</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>

            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>A Level</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-item-tile label>35000</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class="section-tutor">
            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>Tutor</q-item-tile>
              </q-item-section>

              <q-item-section right>
                <q-btn flat color="secondary" v-close-overlay>
                  <q-icon name="add"/>
                </q-btn>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="negative" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item-separator/>
            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>AS Level</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-item-tile label>10000</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>

            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>A2 Level</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-item-tile label>10000</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
            </q-item>

            <q-item multiline>
              <!-- <q-item-section image="statics/mountains.jpg"/> -->
              <q-item-section>
                <q-item-tile label>A Level</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-item-tile label>17000</q-item-tile>
              </q-item-section>
              <q-item-section right>
                <q-btn round flat>
                  <q-icon name="more_vert"/>
                  <q-popover>
                    <div class="group" style=" text-align: center;">
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="edit"/>
                      </q-btn>
                      <q-btn flat color="secondary" v-close-overlay>
                        <q-icon name="delete"/>
                      </q-btn>
                    </div>
                  </q-popover>
                </q-btn>
              </q-item-section>
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
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    SHeader,
    SFooter
  }
};
</script>

<style lang="stylus" scoped>
@import '../../css/app.styl';

.section-title, .section-teacher, .section-tutor {
  background: $primary-white;
}
</style>

