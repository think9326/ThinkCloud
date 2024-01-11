<template>
    <v-app-bar title="新建表单"></v-app-bar>
    <v-navigation-drawer left>
        <DrawerNavigation @child-clicked="changeNavigation"></DrawerNavigation>
    </v-navigation-drawer>
    <v-navigation-drawer right>
        <DrawerNavigation @child-clicked="changeNavigation"></DrawerNavigation>
    </v-navigation-drawer>
</template>

<script>
export default {

}
</script>

<style>
</style>