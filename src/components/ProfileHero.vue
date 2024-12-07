<script setup>
defineProps({
  postProp: { type: Post, required: true}
})
</script>


<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img :src="postProp.creator.picture" :alt="postProp.creator.name" class="creator-img">
        <h5 class="card-title ps-2">{{ postProp.creator.name }}</h5>
        <p class="card-body">{{ postProp.body }}</p>
      </div>
    </div>
    <img :src="postProp.imgUrl" class="card-img-top" alt="...">
  </div>
</template>


<style lang="scss" scoped>

</style>