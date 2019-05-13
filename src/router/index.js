import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/components/Quiz'
import Greet from '@/components/Greet'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Quiz
        },
        {
            path: '/',
            name: 'Greet',
            component: Greet
        }
    ]
})