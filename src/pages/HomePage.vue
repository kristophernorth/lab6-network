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
    <div class="row">
      <div class="col-9">
        <section class="row mt-3">
          <div v-for="post in posts" :key="post.id" class="col-12 my-2">
            <PostCard :postProp="post" />
          </div>
        </section>
      </div>
      <div class="col-3">
        <div v-for="promo in promos" :key="promo.id" class="col-12">
          <PromoCard :promoProp="promo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
