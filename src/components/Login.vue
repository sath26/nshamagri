<template>
    <div class="login-main-container">
              <q-btn to="/home" flat class="q-ma-md" size="lg" color="grey-9" icon="home"></q-btn>
         <transition
  enter-active-class="animated flipInY"
  appear
>
        <div class="sub-container gutter-sm">
          <div class="form-fields-container">
            <div class="login-header">
              <img src="statics\logo\ShamagriPageLogo.svg" alt="shamagri logo" class="shamagri-logo"></div>
                      <q-input color="teal" v-model="email" filled type="email" hint="Email"></q-input>
                        <div class="q-py-sm"></div>
                      <q-input color="teal" v-model="password" filled type="password" hint="Password" ></q-input>
            <q-btn flat class="forgot-btn">forgot password?</q-btn>
            <q-btn size="lg" label="Google sign-in"  @click="signInGoogle" class="q-mt-md q-mb-lg sign-in-google-btn"><q-icon class="g-icon"><img src="/statics/icons/Google-btn_icon.png" alt="Facebook-icon"></q-icon>
</q-btn>
             
            <div class="create-account-btn-container">
              <span class="txt-newuser">New User?</span>
              <q-btn flat to="/register" class="signup-btn q-mx-sm">create account</q-btn>
              </div>
          </div>
          </div>
            </transition>
    <div class="bg-img_container">
      <img class="bg-img" src="statics\img\Login-register-bgShape@2x.png" alt="illustrator" />
    </div>
 </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "MyLayout",
  data() {
    return {
      password: "",
      isPwd: true,
      email: ""
    };
  },
  methods: {
    ...mapActions("auth", ["userSignInWithGoogle"]),

    signInGoogle() {
      this.userSignInWithGoogle();
      
    },
    beforeRouteLeave(to, from, next) {
      // do stuff
      // call next() when done
      next();
    }
  }
};
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
  .sign-in-google-btn
    width 100%
    background-image linear-gradient(#fff,#f2f2f2)
    color #393939
    .g-icon
      img 
        width 35px 
        height 35px
        position absolute
        top 50%
        left 2%
        transform translateY(-50%)
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
.bg-img_container
  padding 0
  position absolute
  bottom 1%
  z-index -1
  .bg-img 
    width 100%
    background-size cover
</style>
