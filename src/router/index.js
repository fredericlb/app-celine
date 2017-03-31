import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Patients from '@/components/Patients'
import Fournitures from '@/components/Fournitures'
import Patient from '@/components/Patient'

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
      path: '/patients/:id',
      component: Patient
    },
    {
      path: '/fournitures',
      name: 'Fournitures',
      component: Fournitures
    }
  ]
})
