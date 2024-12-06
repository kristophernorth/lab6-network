<script setup>
import { profilesService } from '@/services/ProfilesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { onMounted } from 'vue';

 onMounted(() => {
    getProfiles()
  })

  async function getProfiles() {
    try {
      await profilesService.getProfiles()
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting posts]', error)
    }
  }
</script>

<template>
  <h1>Posts</h1>
</template>


<style lang="scss" scoped>

</style>