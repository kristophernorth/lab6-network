<script setup>
import { AppState } from '@/AppState';
import ProfileHero from '@/components/ProfileHero.vue';
import PromoCard from '@/components/PromoCard.vue';
import { postsService } from '@/services/PostsService';
import { profilesService } from '@/services/ProfilesService';
import { promosService } from '@/services/PromosService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const profile = computed(() => AppState.activeProfile)
const posts = computed(() => AppState.posts)

const route = useRoute()

 watch(route, () => {
    getProfileById()
    getPostsByCreatorId()
  }, { immediate: true })

  onMounted(() => {
    getPromos()
  })

  async function getProfileById() {
    try {
      const profileId = route.params.profileId
      await profilesService.getProfileById(profileId)
    } catch (error) {
      Pop.meow(error)
      logger.error('[Getting profile by ID]', error)
    }
  }

  async function getPostsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await postsService.getPostsByCreatorId(profileId)
  } catch (error) {
    Pop.meow(error)
    logger.error('[Getting posts by creator ID]', error)
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
          <div v-if="profile" class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <img :src="profile.picture" :alt="profile.name" class="profile-picture">
                <h5 class="card-title ps-2">{{ profile.name }}</h5>
                <p class="card-body">{{ profile.bio }}</p>
              </div>
            </div>
          </div>
          <!-- <div class="col-12">
            <ProfileHero class="col-12"/>
          </div>   -->
          <div v-for="post in posts" :key="post.id">
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


<style lang="scss" scoped>
.profile-picture {
  height: 30dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.hero {
  min-height: 60dvh;
  background-size: cover;
}

h1 {
  color: var(--bs-light);
  text-shadow: 1px 1px 3px black
}
</style>