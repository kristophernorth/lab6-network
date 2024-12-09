<script setup>
import { AppState } from '@/AppState';
import PageButtons from '@/components/PageButtons.vue';
import PostCard from '@/components/PostCard.vue';
import PostForm from '@/components/PostForm.vue';
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
  <PageButtons/>
  <div class="container">
    <div class="row mt-3">
      <div class="col-9">
        <section class="row">
          <PostForm/> //add v-if here to only show for current logged-in user
          <div v-for="post in posts" :key="post.id" class="col-12 my-2">
            <PostCard :postProp="post"/>
          </div>
        </section>
      </div>
      <div class="col-3">
        <div v-for="promo in promos" :key="promo.id" class="col-12 my-2">
          <PromoCard :promoProp="promo" />
        </div>
      </div>
    </div>
  </div>
  <PageButtons/>
</template>

<style scoped lang="scss">

</style>
