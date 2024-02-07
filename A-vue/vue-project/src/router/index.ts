import {createRouter,createWebHistory} from "vue-router";
import OTRAS from "../views/OtrasAct.vue"
import Index from "../views/Index.vue"
import Informacion from "../views/Informacion.vue"
import Contacto from "../views/Contacto.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/OtrasActividades',
        name: 'OtrasActividades',
        component: OTRAS
      },
      {
        path: '/Informacion',
        name: 'Informacion',
        component: Informacion
      },
      {
        path: '/Contact',
        name: 'Contacto',
        component: Contacto
      }
    ]
  });

  export default router
  