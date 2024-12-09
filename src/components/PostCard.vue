<script setup>
import { Account } from '@/models/Account';
import { Post } from '@/models/Post';
import { Profile } from '@/models/Profile';

defineProps({
  postProp: { type: Post, required: true}
})
</script>


<template>
  <div class="card">
    <div class="card-body">
      Edit / Delete
      <div class="d-flex align-items-center">
        <RouterLink :to="{name: 'Profile', params: {profileId: profile.Id}}">
          <img :src="postProp.creator.picture" :alt="postProp.creator.name" class="creator-img">
        </RouterLink>
        <h5 class="card-title ps-2">{{ postProp.creator.name }}</h5>
        <p class="card-body">{{ postProp.body }}</p>
      </div>
    </div>
    <img :src="postProp.imgUrl" class="card-img-top" alt="...">
  </div>
</template>


<style lang="scss" scoped>
.card-img-top {
  height: 33dvh;
  object-fit: cover;
}
.creator-img {
  height: 5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>