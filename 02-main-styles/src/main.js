require('typeface-libre-baskerville')
require('typeface-libre-franklin')

import('~/assets/styles.css')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
