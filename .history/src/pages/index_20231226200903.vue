<template>
  <div class="main">
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center">
        Main Content
      </v-main>
    </v-layout>
  </div>
</template>


<script setup lang="ts">
import { useUserStore } from '../stores/useUserStore'
const userInfo = useUserStore().userInfo
</script>

<style>
.main {
  width: 100%;
  height: 100%;
}
</style>