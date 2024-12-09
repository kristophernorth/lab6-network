<script setup>

</script>


<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img :src="postProp.creator.picture" :alt="postProp.creator.name" class="creator-img">
        <form>
          <div class="mb-3">
            <span class="input-group-text">Share what's happening</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          <label for="formFile" class="form-label">Photo/Video</label>
          <input class="form-control" type="file" id="formFile">
          <button type="submit" class="btn btn-primary">Post</button>
        </form>
      </div>
    </div>
  </div>  
</template>


<style lang="scss" scoped>

</style>