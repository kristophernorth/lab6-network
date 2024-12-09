<script setup>
import { AppState } from '@/AppState';
import PageButtons from '@/components/PageButtons.vue';
import PostCard from '@/components/PostCard.vue';
import PromoCard from '@/components/PromoCard.vue';
import { postsService } from '@/services/PostsService';
import { promosService } from '@/services/PromosService';
import { searchService } from '@/services/SearchService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted, ref } from 'vue';

const promos = computed(() => AppState.promos)
// const posts = computed(() => AppState.posts)
const searchTerm = ref('')

onMounted(() => {
    getSearchResults()
    // getPosts()
    getPromos()
  })

  // async function getPosts() {
  //   try {
  //     await postsService.getPosts()
  //   } catch (error) {
  //     Pop.meow(error)
  //     logger.error('[Getting posts]', error)
  //   }
  // }
  
  async function getSearchResults() {
    try {
      await postsService.getSearchResults(searchTerm.value)
      searchTerm.value = ''
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting search results]', error)
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
  <section class="row mt-4">
    <label for="search-bar" class="mt-3 d-flex justify-text-center">Search posts</label>
    <form @submit.prevent="getSearchResults()" class="input-group col-12 mt-3">
      <input v-model="searchTerm" id="search-bar" type="text" class="form-control">
      <button class="btn btn-primary"><i class="mdi mdi-magnify"></i></button>
    </form>
  </section>
  <section class="d-flex">
    <span>{{  }}</span>
  </section>
  <PageButtons/>
  <div class="container">
    <div class="row">
      <div class="col-9">
        <section class="row mt-3">
          <div v-for="post in posts" :key="post.id" class="col-12 my-2">
            <PostCard :postProp="post"/>
          </div>
        </section>
      </div>
      <div class="col-3 mt-3">
        <div v-for="promo in promos" :key="promo.id" class="col-12">
          <PromoCard :promoProp="promo" />
        </div>
      </div>
    </div>
  </div>
  <PageButtons/>
</template>


<style lang="scss" scoped>

</style>