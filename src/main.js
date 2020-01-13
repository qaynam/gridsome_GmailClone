//css
import '~/assets/css/main.css';

import Base from '~/layouts/Base.vue'
import index from '~/pages/Index.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', Base);
  Vue.component('index', index);
  

}
