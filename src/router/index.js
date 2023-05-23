import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../view/Home.vue'
import SearchByIngredient from '../view/SearchByIngredient.vue'
import SearchByLetter from '../view/SearchByLetter.vue'
import SearchByName from '../view/SearchByName.vue'


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: SearchByName
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: SearchByIngredient
            },
            

        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;