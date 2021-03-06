<template lang='pug'>
  div
    div.setttings-content-pc
      div(is='sui-container')
        TopMenu(isTerms=false)
        h2.terms-title-style プライバシーポリシー
        p.privacy-preface-style Montage運営者(以下「運営者」といいます)は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律(以下「個人情報保護法」といいます)を遵守すると共に、以下のプライバシーポリシー(以下「本プライバシーポリシー」といいます)に従い、「Montage」の名前で運営者から提供されるサービス(以下「本サービス」といいます)の利用にあたってお客様から取得する個人情報の適切な取扱い及び保護に努めます。
        div(v-for="block in blocks")
          TermsBlock
            h3.terms-title-style(slot="terms-header") {{block.title}}
            ol.privacy-paragraph-style(slot="terms-column")
              span(v-for="column in block.columns")
                ul.privacy-column-list-style(v-if="typeof(column) === 'object'")
                  p(v-for="c in column") ◇ {{ c }}
                ol.privacy-column-list-style(v-else="typeof(column) !== Array") {{ column }}
        p.privacy-paragraph-style(align='right') 以上
        p.privacy-paragraph-style(align='left') 2020年4月26日制定
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

const TermsBlock = () => import(
  /* webpackChunkName: "terms-block" */
  '../molecules/TermsBlock.vue');

const TopMenu = () => import(
  /* webpackChunkName: "top-menu" */
  '../molecules/TopMenu.vue');

@Component({
  components: {
    TopMenu,
    TermsBlock,
  },
  head: {
    title: {
      inner: 'プライバシーポリシー',
      separator: '/',
    },
    meta: [
      {
         name: 'description',
         content: 'montage.bioのプライバシーポリシーページ。',
      },
    ],
  },
})
export default class TermsTemplate extends Vue {
  private blocks: any = [
      {
        title: '個人情報の定義',
        columns: [
          '本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報を意味するものとします。',
        ],
      },
      {
        title: '個人情報の利用目的',
        columns: [
          '運営者は、お客様の個人情報を、以下の目的で利用いたします。',
          [
            'ユーザーが本サービスを円滑に利用できるようにするため',
            '本サービス利用に関する統計データを作成するため',
            '現在提供している本サービスまたは今後提供を検討している本サービスに関するアンケート実施のため',
            'ユーザーからのお問い合わせに対する対応のため',
            '本サービスに関する情報等または運営者の事業者が広告主となる広告情報等をメールマガジン等により告知するため',
            '今後の本サービスに関する新企画立案を行い提供するため',
            'キャンペーン等の抽選及び賞品や商品発送のため',
            'ブログ、SNSサービス等の画像等の利用許諾の連絡ため',
            'ユーザーからのお問い合わせ時など、本人確認を行うため',
            'その他本サービスに関する重要なお知らせなど、必要に応じた連絡を行うため',
            '本サービスのマーケティング活動全般のため',
          ],
        ],
      },
      {
        title: '個人情報利用目的の変更',
        columns: [
          '運営者は、個人情報の利用目的を、前項の利用目的と関連性を有すると合理的に認められる範囲内において変更することがあり、変更した場合にはお客様に通知又は公表します。',
        ],
      },
      {
        title: '個人情報利用の制限',
        columns: [
          '運営者は、個人情報保護法その他の法令により許容される場合を除き、お客様の同意を得ず、利用目的の達成に必要な範囲を超えて個人情報を取り扱いません。但し、次の場合はこの限りではありません。',
          [
            '法令に基づく場合',
            '人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき',
            '公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき',
            '国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき',
          ],
        ],
      },
      {
        title: '個人情報の適正な取得',
        columns: [
          '運営者は、適正に個人情報を取得し、偽りその他不正の手段により取得しません。',
        ],
      },
      {
        title: '個人情報の安全管理',
        columns: [
          '運営者は、取り扱う個人情報の紛失、破壊、改ざん及び漏洩の防止、その他個人情報の安全管理のために必要かつ適切な措置を講じます。また、運営者は、個人情報の取扱いの全部又は一部を委託する場合は、委託先において個人情報の安全管理が図られるように必要かつ適切な措置を講じます。',
        ],
      },
      {
        title: '第三者提供',
        columns: [
          '運営者は、個人情報保護法その他の法令に基づき開示が認められる場合を除くほか、あらかじめお客様の同意を得ないで、個人情報を第三者に提供しません。但し、次に掲げる場合は上記に定める第三者への提供には該当しません。',
          [
            '運営者が利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託する場合',
            '合併その他の事由による事業の承継に伴って個人情報が提供される場合',
          ],
        ],
      },
      {
        title: '個人情報の開示',
        columns: [
          '運営者は、お客様から、個人情報保護法の定めに基づき個人情報の開示を求められたときは、お客様ご本人からのご請求であることを確認の上で、お客様に対し、遅滞なく開示を行います(当該個人情報が存在しないときにはその旨を通知いたします。)。但し、個人情報保護法その他の法令により、運営者が開示の義務を負わない場合は、この限りではありません。',
        ],
      },
      {
        title: '個人情報の訂正等',
        columns: [
          '運営者は、お客様から、個人情報の内容が事実でないという理由によって、個人情報保護法の定めに基づきその内容の訂正、追加又は削除(以下「訂正等」といいます。)を求められた場合には、お客様ご本人からのご請求であることを確認の上で、利用目的の達成に必要な範囲内において、遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正等を行い、その旨をお客様に通知します(訂正等を行わない旨の決定をしたときは、お客様に対しその旨を通知いたします。)。但し、個人情報保護法その他の法令により、運営者が訂正等の義務を負わない場合は、この限りではありません。',
        ],
      },
      {
        title: '個人情報の利用停止等',
        columns: [
          '運営者は、お客様から、お客様の個人情報が、あらかじめ公表された利用目的の範囲を超えて取り扱われているという理由又は偽りその他不正の手段により取得されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止又は消去(以下「利用停止等」といいます。)を求められた場合において、そのご請求に理由があることが判明した場合には、お客様ご本人からのご請求であることを確認の上で、遅滞なく個人情報の利用停止等を行い、その旨をお客様に通知します。但し、個人情報保護法その他の法令により、運営者が利用停止等の義務を負わない場合は、この限りではありません。',
        ],
      },
      {
        title: 'Cookie(クッキー)その他の技術の利用',
        columns: [
          '本サービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、運営者による本サービスの利用状況等の把握に役立ち、サービス向上に資するものです。Cookieを無効化されたいお客様は、ウェブブラウザの設定を変更することによりCookieを無効化することができます。但し、Cookieを無効化すると、本サービスの一部の機能をご利用いただけなくなる場合がありますので、予めご了承ください。',
        ],
      },
      {
        title: '継続的改善',
        columns: [
          '運営者は、個人情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものとし、必要に応じて、本プライバシーポリシーを変更することがあります。',
        ],
      },
  ];
}
</script>

<style lang='stylus' scoped>
.terms-title-style
  margin 16px 4px
  padding 8px
  border-bottom solid 1px #d9d9d9

.privacy-paragraph-style
  padding 4px 10px

.privacy-preface-style
  padding 10px 4px

.privacy-column-list-style
  padding 16px 0px !important
</style>