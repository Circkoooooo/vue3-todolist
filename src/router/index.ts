import Today from '~/pages/Today.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
const routes = [{ path: '/', component: Today }]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
