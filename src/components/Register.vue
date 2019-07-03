<template>
    <div class="main-container">
        <transition
  enter-active-class="animated fadeIn"
  appear
>
              <q-btn to="/home" flat class="q-ma-md" icon="home"></q-btn>
        </transition>
         <transition
  enter-active-class="animated flipInY"
  appear
>
        <div class="sub-container gutter-sm">
          <div class="form-fields-container">
            <div class="login-header"><img src="\assets\logo\logo-sm.svg" alt="shamagri logo" class="shamagri-logo"></div><div class="welcome-txt q-py-lg"><p>Welcome To,</p><p class="shamagri-txt">Shamagri</p></div>
            <q-field>
              <q-input color="secondary" v-model="name" type="text" :before="[{icon: 'person', handler () {}}]" float-label="User Name" class="q-my-sm input-field" />
              <q-input color="secondary" v-model="email" type="email" :before="[{icon: 'mail', handler () {}}]" float-label="Email" class="q-my-sm input-field" />
              <q-input color="secondary" v-model="password" type="password" :before="[{icon: 'vpn_key', handler () {}}]" float-label="Password" class="q-my-xs input-field"/>
              <q-input color="secondary" v-model="password" type="password" :before="[{icon: 'vpn_key', handler () {}}]" float-label="Confirm Password" class="q-my-xs input-field"/>
            </q-field>
            <q-btn size="md" icon="input" label="Register" style="width:100%;" class="q-mt-lg sign-in-btn"/>
            <q-btn size="md" icon="fab fa-facebook" label="Sign-up with Facebook" style="width:100%;" class="q-mt-md q-mb-lg sign-in-facebook-btn"/>
          </div>
        </div>
        </transition>

    </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
.main-container 
  background #fafafa
.sub-container
  width 40%
  margin 0 auto
  @media screen and (max-width: 1090px) 
    width 50%
   @media screen and (max-width: 800px) 
    width 60%
  @media screen and (max-width: 600px) 
    width 75%
  @media screen and (max-width: 450px) 
    width 100%
.form-fields-container 
  margin 0 auto
  padding 2rem 1.5rem
  .sign-in-btn
    background-image linear-gradient(#42C282,#2E9681)
    color #fafafa
  .sign-in-facebook-btn
    background-image linear-gradient(#4B6FD6,#415FB4)
    color #fafafa
  .forgot-btn
    font-size .8rem
    color #4C8D64
    float right
  .signup-btn
    color #4C8D8B
  .create-account-btn-container
    text-align center
.login-header
  text-align center
.shamagri-logo 
  width 300px
  @media screen and (max-width: 450px) 
    width 220px
.home-icon
  width 40px
  @media screen and (max-width: 450px) 
    width 30px
.shamagri-logo
    width 150px
.welcome-txt
    font-weight 400
    font-size 1.6em
    color #35947A
.shamagri-txt
    font-weight 600
    font-size 1.5em 
</style>
