<template lang="pug">
  div(id="app" class='wrapper')
    Header
    router-view
    li
      router-link(to='/') Home
    li(v-if='!isAuthenticated')
      a(href='#', @click.prevent='login') Login
    // new link to /profile - only show if authenticated
    li(v-if='isAuthenticated')
      router-link(:to="`/profile/RAGUNA2`") Profile
    // /profile
    li(v-if='isAuthenticated')
      a(href='#', @click.prevent='logout') Log out
    Footer
</template>

<script>
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isAuthenticated: false,
      profile: this.$auth.profile,
    };
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    },
  },
};
</script>

<style lang="stylus">
body
  font-family 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif !important
  background #F8F8F8 !important
  min-height 100vh
  margin 0
  padding 0
  font-size calc(10px + 2vmin)
  color #444

.icon
  height 16x
  width 16px

.columns
  border 1px solid #EEE

.column
  background white
  border-radius 5px

.clearfix
  display block

.clearfix:after
  content " "
  clear both
  display block

.font-size__large
  font-size 24px

.font-size__medium
  font-size 16px

.font-size__small
  font-size 13px

.font-size__mini
  font-size 10px

@media screen and (max-width 770px)
  div.desktop display:none

  /*ヘッダー */
  #header-right-hamburger
    background red
    display none

@media screen and (max-width 770px)
  #header-left width 100%

  footer a
    text-decoration underline

  img#profile
    border-top-left-radius 5px
    border-top-right-radius 5px
    width 100%
    display inline-block

@media screen and (max-width 770px)
  img#profile
    height 30vh
    object-fit cover

.p0
  padding 0!important

.pt10
  padding-top 10px!important

.pt15
  padding-top 15px!important

.pt20
  padding-top 20px!important

.pt30
  padding-top 30px!important

.pt40
  padding-top 40px!important

.pt60
  padding-top 60px!important

.pt70
  padding-top 70px!important

.pt80
  padding-top 80px!important

.pt90
  padding-top 90px!important

.pt100
  padding-top 100px!important


.pt110
  padding-top 110px!important

.pt120
  padding-top 120px!important

.pt130
  padding-top 130px!important

.pt140
  padding-top 140px!important

/* Padding Bottom */
.pb0
  padding-bottom 0px!important


.pb10
  padding-bottom 10px!important

.pb15
  padding-bottom 15px!important

.pb20
  padding-bottom 20px!important

.pb30
  padding-bottom 30px!important

.pb40
  padding-bottom 40px!important

.pb50
  padding-bottom 50px!important

.pb60
  padding-bottom 60px!important

.pb70
  padding-bottom 70px!important

.pb80
  padding-bottom 80px!important

.pb90
  padding-bottom 90px!important

.pb100
  padding-bottom 100px!important

.pb110
  padding-bottom 110px!important

.pb120
  padding-bottom 120px!important

.pb130
  padding-bottom 130px!important

.pb140
  padding-bottom 140px!important
/* Padding Left */

.pl0
  padding-left 0px!important


.pl3
  padding-left 3px!important

.pl5
  padding-left 5px!important

.pl10
  padding-left 10px!important

.pl20
  padding-left 20px!important

.pl30
  padding-left 30px

.pl40
  padding-left 40px

.pl50
  padding-left 50px

.pl60
  padding-left 60px

.pl70
  padding-left 70px

.pl80
  padding-left 80px

.pl90
  padding-left 90px


.pl100
  padding-left 100px

/* Padding Right */
.pr0
  padding-right 0px!important

.pr5
  padding-right 5px!important

.pr10
  padding-right 10px!important

.pr20
  padding-right 20px!important

.pr30
  padding-right 30px!important

.pr40
  padding-right 40px

.pr50
  padding-right 50px

.pr60
  padding-right 60px

.pr70
  padding-right 70px

.pr80
  padding-right 80px

.pr90
  padding-right 90px

.pr100
  padding-right 100px

.pr110
  padding-right 110px

.pr120
  padding-right 120px

@media (min-width:1200px)
  .pl-lg-50
    padding-left 50px

  .pl-lg-80
    padding-left 80px

@media (min-width:992px)
  pt-md-50
  padding-top 50px

/* Margin Auto */
.mr-auto
  margin auto
  float none

/* Margin Top */
.mt0
  margin-top 0!important

.mt5
  margin-top 5px!important

.mt10
  margin-top 10px!important

.mt20
  margin-top 20px!important

.mt30
  margin-top 30px!important

.mt40
  margin-top 40px!important

.mt50
  margin-top 50px!important

.mt60
  margin-top 60px!important

.mt70
  margin-top 70px!important

.mt80
  margin-top 80px!important

.mt90
  margin-top 90px!important

.mt100
  margin-top 100px!important

.mt110
  margin-top 110px!important

.mt120
  margin-top 120px!important

/* Margin Bottom */

.mb0
  margin-bottom 0!important

.mb5
  margin-bottom 5px!important

.mb10
  margin-bottom 10px!important

.mb15
  margin-bottom 15px!important

.mb20
  margin-bottom 20px!important

.mb30
  margin-bottom 30px!important

.mb40
  margin-bottom 40px!important

.mb50
  margin-bottom 50px

.mb60
  margin-bottom 60px

.mb70
  margin-bottom 70px

.mb80
  margin-bottom 80px

.mb90
  margin-bottom 90px

.mb100
  margin-bottom 100px

.mb110
  margin-bottom 110px

.mb120
  margin-bottom 120px

/* Margin Left */
.ml0
  margin-left 0!important

.ml15
  margin-left 5px

.ml10
  margin-left 10px

.ml20
  margin-left 20px

.ml30
  margin-left 30px

.ml40
  margin-left 40px

.ml50
  margin-left 50px

.ml60
  margin-left 60px

.ml70
  margin-left 70px

.ml80
  margin-left 80px

.ml90
  margin-left 90px

.ml100
  margin-left 100px

.ml110
  margin-left 110px

/* Margin Right */
.mr0
  margin-right 0!important

.mr5
  margin-left 5px!important

.mr10
  margin-right 10px!important

.mr20
  margin-right 20px!important

.mr30
  margin-right 30px!important

.mr40
  margin-right 40px!important

.mr50
  margin-right 50px!important

.mr60
  margin-right 60px!important

.mr70
  margin-right 70px!important

.mr80
  margin-right 80px!important

.mr90
  margin-right 90px!important

.mr100
  margin-right 100px

.mr110
  margin-right 110px
</style>