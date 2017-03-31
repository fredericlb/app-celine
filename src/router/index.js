import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Patients from '@/components/Patients'
import Fournitures from '@/components/Fournitures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    },
    {
      path: '/fournitures',
      name: 'Fournitures',
      component: Fournitures
    }
  ]
})
