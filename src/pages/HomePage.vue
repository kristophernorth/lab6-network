<script setup>
import { AppState } from '@/AppState';
import PostCard from '@/components/PostCard.vue';
import PromoCard from '@/components/PromoCard.vue';
import { postsService } from '@/services/PostsService';
import { promosService } from '@/services/PromosService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

  const posts = computed(() => AppState.posts)
  const promos = computed(() => AppState.promos)

  onMounted(() => {
    getPosts()
    getPromos()
  })

  async function getPosts() {
    try {
      await postsService.getPosts()
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting posts]', error)
    }
  }

  async function getPromos() {
    try {
      await promosService.getPromos()
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting promos]', error)
    }
  }

</script>

<template>
  <div class="container">
    <section class="row mt-3">
      <div v-for="post in posts" :key="post.id" class="col-9 mb-3">
        <PostCard :postProp="post" />
      </div>
    </section>
      <div v-for="promo in promos" :key="promo.id" class="col-3 mb-3">
        <PromoCard :promoProp="promo" />
      </div>
  </div>
</template>

<style scoped lang="scss">

</style>
