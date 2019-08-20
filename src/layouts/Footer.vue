/* 
sell will be fixed icon

 */
<template>
 <div class="footer-nav">
            <div class="contact-info">
                   <div class="chip"><q-icon name="place"></q-icon> Address</div>
                   <div class="chip"><q-icon name="phone"></q-icon> Phone number</div>
                   <div class="chip"><q-icon name="email"></q-icon> E-mail</div>
            </div>
            <ul class="footer-nav-items_list">
              <li>Terms and Condition</li>
              <li>Privacy</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
      </div>
</template>
<script>
export default {
  name: "SFooter",
  data() {
    return {
      icon: false,
      group: "op1",
      options: [
        {
          label: "Goods",
          value: "/choose_good"
        },
        {
          label: "Services",
          value: "/choose_service"
        },
       
      ]
    };
  }
};
</script>

<style lang="stylus">
.footer-nav
    width 100%
    background #35947A
    position relative
    bottom 0
    .contact-info
      width 60%
      padding 20px
      background #29705d
      border-radius 0 0 10px 10px 
      margin 0 auto 
      text-align center
      .chip
        color #fafafa
        display inline
        padding 20px
    .footer-nav-items_list
      margin 0 
      padding 20px
      list-style none
      text-decoration none
      li 
        color #fafafa
</style>

