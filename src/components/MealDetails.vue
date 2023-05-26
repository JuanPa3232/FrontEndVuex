<template>
    <div class="mt-5">
        <h1 class="text-center text-4xl mb-5 uppercase">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="float-right ml-4 mr-4 w-2/5 rounded-lg">
        <div>
            <div class="px-10">
                <strong>Category: </strong> {{ meal.strCategory }}
            </div>
            <br>
            <div class="px-10">
                <strong>Area: </strong> {{ meal.strArea }}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <br>
                    <br>
                    <h2 class="text-2xl font-semibold mb-2 px-10"> Ingredients: </h2>
                    <ul>
                        <template v-for="(elmt, index) of new Array(20)">
                            <li v-if="meal[`strIngredient${index + 1}`]" class="px-10">
                                {{ index + 1 + "-." }} {{ meal[`strIngredient${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
                <div>
                    <br>
                    <br>
                    <h2 class="text-2xl font-semibold mb-2 px-10"> Measures: </h2>
                    <ul>
                        <template v-for="(elmt, index) of new Array(20)">
                            <li v-if="meal[`strIngredient${index + 1}`]" class="px-10">
                                {{ index + 1 + "-." }} {{ meal[`strMeasure${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {};
        })
})

</script>