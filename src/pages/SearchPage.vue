<script setup>
import { searchService } from '@/services/SearchService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { onMounted } from 'vue';


onMounted(() => {
    getSearchResults()
  })

  async function getPosts() {
    try {
      await searchService.getSearchResults()
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting search results]', error)
    }
  }
</script>

<template>
  <h1>Posts</h1>
</template>


<style lang="scss" scoped>

</style>