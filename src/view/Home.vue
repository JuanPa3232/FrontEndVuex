<template>
    <div>
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
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

const meals = ref([]);

onMounted(async () => {
    for (let i = 0; i <= 5; i++) {
        axiosClient
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
})

</script>