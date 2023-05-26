<template>
    <div class="">
        <div class="flex flex-col p-8 ">
            <div class="flex justify-center gap-8 mt-5">
                <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                    {{ letter }}
                </router-link>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
            <div v-for="meal of meals" :key="meal.idMeal"
                class="bg-white shadow-md rounded-xl hover:bg-green-500 transition-colors font-sans hover:scale-105">
                <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                    <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-52 object-cover">
                    <div class="p-3">
                        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import store from '../store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)
const route = useRoute();

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>