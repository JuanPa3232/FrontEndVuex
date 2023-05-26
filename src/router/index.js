import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../view/Home.vue'
import SearchByLetter from '../view/SearchByLetter.vue'
import SearchByName from '../view/SearchByName.vue'
import MealDetails from '../components/MealDetails.vue'


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
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
            

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;