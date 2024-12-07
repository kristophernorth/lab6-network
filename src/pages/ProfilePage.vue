<script setup>
import { AppState } from '@/AppState';
import { postsService } from '@/services/PostsService';
import { profilesService } from '@/services/ProfilesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const profile = computed(() => AppState.activeProfile)
const posts = computed(() => AppState.posts)

const route = useRoute()

 watch(route, () => {
    getProfileById()
    getPostsByCreatorId()
  }, [ immediate: true ])

  async function getProfileById() {
    try {
      const profileId = route.params.profileId
      await profilesService.getProfileById(profileId)
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting profile by ID]', error)
    }
  }

  async function getPostsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await postsService.getPostsByCreatorId(profileId)
  } catch (error) {
    Pop.meow(error)
    logger.error('[Getting posts by creator ID]', error)
  }
}

</script>

<template>
  <h1>Profile</h1>
</template>


<style lang="scss" scoped>

</style>