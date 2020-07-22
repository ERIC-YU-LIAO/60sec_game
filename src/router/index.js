import Vue from 'vue'
import VueRouter from 'vue-router'
import APP from '../App.vue'
import page2 from '../components/page2'
import final from '../components/Final'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'APP2',
    component: APP,
  },
  {
    path: '/',
    name: 'page2',
    component: page2,
  },
  {
    path: '/',
    name: 'final',
    component: final,
  }


]

const router = new VueRouter({
  routes,
})

export default router
