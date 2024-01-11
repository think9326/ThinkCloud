<template>
    <v-navigation-drawer expand-on-hover rail-width>
        <DrawerNavigation @child-clicked="changeNavigation"></DrawerNavigation>
    </v-navigation-drawer>
    <v-app-bar title="新建表单"></v-app-bar>
    <v-navigation-drawer expand-on-hover rail-width>
        <DrawerNavigation @child-clicked="changeNavigation"></DrawerNavigation>
    </v-navigation-drawer>
</template>

<script>
export default {

}
</script>

<style></style>