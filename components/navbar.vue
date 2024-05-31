<template>
    <nav class=" text-white bg-slate-300/40 w-full sm:w-full">
      <div class="flex items-center justify-between">
        <!-- Name aligned to the left -->
        <div class="ml-4">
          <nuxt-link to="/">Ben's Portfolio</nuxt-link>
        </div>
        <!-- Navigation links centered -->
        <ul class="flex space-x-7 justify-center flex-grow">
          <!-- <li><nuxt-link to="/">Home</nuxt-link></li> -->
          <!-- <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          <li><nuxt-link to="/project">Projects</nuxt-link></li> -->
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    padding: 1rem 0;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  