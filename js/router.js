import { createWebHistory, createRouter } from 'vue-router'
import Game from '../pages/Game.vue'
import Instruction from '../pages/Instruction.vue'

const routes = [
    { path: '/', component: Game, name: 'game' },
    { path: '/instruction', component: Instruction, name: 'instruction' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }