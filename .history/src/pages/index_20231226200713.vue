<template>
  <div>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        Main Content
      </v-main>
    </v-layout>
  </div>
</template>


<script setup lang="ts">
import { useUserStore } from '../stores/useUserStore'
const userInfo = useUserStore().userInfo
</script>

<style></style>