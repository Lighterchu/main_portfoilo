<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      projectName: 'apex'
    }
  }
  
};



</script>

<template>
  <div v-if="info.knowledge" class="bg-gray-600 rounded-xl w-36 mr-2 mt-2 ml-3 p-2">
    <h1 class="flex justify-center">{{ info.name }}</h1>
    <div class="bg-gray-200 rounded-full h-4 mb-4 flex flex-col">
      <div
        class="bg-green-500 rounded-full h-4 animate-pulse"
        :style="{ width: info.knowledge + '%' }"
      ></div>
    </div>
    <p class="text-center">{{ info.knowledge }}%</p>
  </div>
  <div v-if="info.site" class="bg-gray-600 h-52 rounded-xl w-36 mr-2 mt-2 ml-3 p-2">
    <h1 class="flex justify-center">{{ info.name }}</h1>
    <img class="size-32 rounded-md" :src="`/${info.image}.png`" alt="Content not found" />
    <div class="text-center pt-2">
      <!-- <p>{{ info.image }}</p> -->
      <a class="bg-gray-200 text-xs hover:bg-green-200 text-black p-1 px-10 rounded-full" :href="info.site">Vist Site</a>
    </div>
  </div>
</template>
