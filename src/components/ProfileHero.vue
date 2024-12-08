<script setup>
import { Post } from '@/models/Post';

defineProps({
  heroProp: { type: Hero, required: true}
})
</script>


<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img :src="heroProp.creator.picture" :alt="heroProp.creator.name" class="creator-img">
        <h5 class="card-title ps-2">{{ heroProp.creator.name }}</h5>
        <p class="card-body">{{ heroProp.body }}</p>
      </div>
    </div>
    <img :src="heroProp.imgUrl" class="card-img-top" alt="...">
  </div>
</template>


<style lang="scss" scoped>

</style>