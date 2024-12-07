<script setup>
import { Promo } from '@/models/Promo';


defineProps({
  promoProp: { type: Promo, required: true}
})
</script>


<template>
    <img :src="promoProp.tall" alt="...">
</template>

<style lang="scss" scoped>

</style>