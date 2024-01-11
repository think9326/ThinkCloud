<template>
  <div>
    hello, {{ userInfo.userName }}

    <ListItem></ListItem>
  </div>
</template>


<script setup lang="ts">
import { useUserStore } from '../stores/useUserStore'
const userInfo = useUserStore().userInfo
</script>

<style>

</style>