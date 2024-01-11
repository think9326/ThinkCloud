<template>
  <div>
    hello, nuxt3
    <ListItem></ListItem>
  </div>
</template>


<script setup lang="ts">
import { useUserStore } from '../stores'
const userInfo = useUserStore().userInfo
</script>

<style>

</style>