<template>
  <div class="main">
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer expand-on-hover rail>
        <DrawerNavigation @child-clicked="changeNavigation"></DrawerNavigation>
      </v-navigation-drawer>

      <v-app-bar title="Application bar"></v-app-bar>

      <v-main class="d-flex align-center justify-center" style="min-height: 100vh;">
        <MainHome />
        <MainWorkbenches />
        <MainMyForm />
        <MainMyTeam />
      </v-main>
    </v-layout>
  </div>
</template>


<script>
import { useUserStore } from '../stores/useUserStore'
export default {
  data() {
    return {
      navigation: '',
    };
  },
  methods: {
    changeNavigation(data) {
      // 在父组件中处理子组件传递的数据
      this.navigation = data;
    },
  },
}
</script>

<style>
.main {
  width: 100%;
  height: 100%;
}
</style>