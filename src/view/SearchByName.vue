<template>
    <div class="">
        <div class="p-8 pb-0">
            <input type="text" v-model="keyword" class="rounded border-10 border-gray-200 w-full"
                placeholder="Search for meal" @change="searchMeals" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
            <div v-for="meal of meals" :key="meal.idMeal"
                class="bg-white shadow-md rounded-xl hover:bg-green-500 transition-colors font-sans hover:scale-105">
                <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
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
import { computed } from '@vue/reactivity';
import { ref, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})
</script>
