<script setup>
import { AppState } from '@/AppState';
import { postsService } from '@/services/PostsService';
import { searchService } from '@/services/SearchService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)
const currentSearch = computed(() => AppState.currentSearch)

async function changePage(pageNumber) {
  try {
    if (currentSearch.value) {
      logger.log(currentSearch.value)
      await searchService.changeSearchPage(pageNumber, currentPage.value)
    } else {
    await postsService.changePage(pageNumber)
    }
  } catch (error) {
    Pop.toast(`Could not get page ${pageNumber}`, 'error')
    logger.log(error)
  }
}

</script>


<template>
  <section class="row mt-4 align-items-center">
    <button :disabled="currentPage == 1" @click="changePage(currentPage - 1)" class="col-2 btn btn-primary">
      Newer
    </button>
    <div class="col-8 text-center">
      page {{ currentPage }} of {{ totalPages }}
    </div>
    <button :disabled="currentPage == totalPages" @click="changePage(currentPage + 1)" class="col-2 btn btn-primary">
      Older
    </button>
  </section>
</template>


<style lang="scss" scoped>

</style>