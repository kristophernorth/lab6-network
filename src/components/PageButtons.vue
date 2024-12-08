<script setup>
import { AppState } from '@/AppState';
import { postsService } from '@/services/PostsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function changePage(pageNumber) {
  try {
    await postsService.changePage(pageNUmber)
  } catch (error) {
    Pop.toast(`Could not get page ${pageNumber}`, 'error')
    logger.log(error)
  }
}

</script>


<template>
  <section class="row mt-4 align-items-center">
    <button :disabled="currentPage == 1" @click="changePage(currentPage - 1)" class="col-4 btn btn-primary">
      Newer
    </button>
    <div class="col-8 text-center">
      page {{ currentPage }} of {{ totalPages }}
    </div>
    <button :disabled="currentPage == totalPages" @click="changePage(currentPage + 1)" class="col-4 btn btn-primary">
      Older
    </button>
  </section>
</template>


<style lang="scss" scoped>

</style>