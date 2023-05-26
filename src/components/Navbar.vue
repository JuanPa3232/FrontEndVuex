<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5">
      <img src='../assets/logo.png' alt="logo" class="w-64 px-0.5 h-30">

    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-400 ">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-400 ">
        Search by Letter
      </router-link>
      <a href="https://github.com/JuanPa3232/FrontEndVuex" class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-400 ">
        Help
      </a>
    </div>
  </header>
</template>

<script>

</script>