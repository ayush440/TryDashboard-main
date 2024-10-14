import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Strategy from '../views/Strategy.vue'
import Broker from '../views/Broker.vue'
import Order from '../views/Orders.vue'; 

import Positions from '../views/Positions.vue'
import Tutorials from '../views/Tutorials.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/strategy',
    name: 'Strategy',
    component: Strategy
  },
  {
    path: '/broker',
    name: 'Broker',
    component: Broker
  },
  {
    path: '/orders',  
    name: 'Order',
    component: Order
  },
  
  {
    path: '/positions',
    name: 'Positions',
    component: Positions
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: Tutorials
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router