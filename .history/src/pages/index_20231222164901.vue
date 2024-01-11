<template>
  <div>
    hello, {{ userInfo.userName }}
    <ListItem></ListItem>
    <NuxtLink to="/login">去登录</NuxtLink>
  </div>
</template>


<script setup lang="ts">
import { useUserStore } from '../stores/useUserStore'
const userInfo = useUserStore().userInfo
</script>

<style>

</style>