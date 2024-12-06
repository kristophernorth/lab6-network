<script setup>
import { AppState } from '@/AppState';
import { postsService } from '@/services/PostsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

  const posts = computed(() => AppState.posts)

  onMounted(() => {
    getPosts()
  })

  async function getPosts() {
    try {
      await postsService.getPosts()
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting posts]', error)
    }
  }
</script>

<template>
  <h1>{{ posts }}</h1>
</template>

<style scoped lang="scss">
</style>
