<template>
    <div class="login-main-container">
              <q-btn to="/home" flat class="q-ma-md" size="lg" color="grey-9" icon="home"></q-btn>
         <transition
  enter-active-class="animated flipInY"
  appear
>
        <div class="sub-container gutter-sm">
          <div class="form-fields-container">
            <div class="login-header"><img src="\assets\logo\ShamagriPageLogo.svg" alt="shamagri logo" class="shamagri-logo"></div>
                      <q-input v-model="email" filled type="email" hint="Email"></q-input>
                        <div class="q-py-sm"></div>
                      <q-input v-model="password" filled type="password" hint="Password" ></q-input>
            <q-btn flat class="forgot-btn">forgot password?</q-btn>
            <q-btn size="lg" label="Facebook sign-in" style="width:100%;" class="q-mt-md q-mb-lg sign-in-facebook-btn"><q-icon class="fb-icon"><img src="/assets/icons/facebook-btn-icon.svg" alt="Facebook-icon"></q-icon>
</q-btn>
             
            <div class="create-account-btn-container"><span class="txt-newuser">New User?</span><q-btn flat to="/register" class="signup-btn q-mx-sm">create account</q-btn></div>
          </div>
        </div>
        </transition>
      <div class="bg-img_container">
        <img class="bg-img" src="..\assets\img\Login-register-bgShape@2x.png" alt="illustrator">
      </div>
    </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      password: '',
      isPwd: true,
      email: ''
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
.login-main-container 
  background transparent
  overflow hidden
  &:webkit-scrollbar
    display none
.sub-container
  width 40%
  margin 0 auto
  animation flipInY .5s cubic-bezier(0,.68,1,.63)
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
.sign-in-facebook-btn
  .fb-icon
    img 
      width 35px 
      height 35px
      position absolute
      top 50%
      left 2%
      transform translateY(-50%)
.bg-img_container
  padding 0
  position absolute
  bottom 1%
  z-index -1
  .bg-img 
    width 100%
    background-size cover
</style>
