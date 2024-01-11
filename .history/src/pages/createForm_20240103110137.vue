<template>
    <v-navigation-drawer class="left">
        <DrawerNavigation @child-clicked="changeNavigation"></DrawerNavigation>
    </v-navigation-drawer>
    <v-navigation-drawer class="right">
        <DrawerNavigation @child-clicked="changeNavigation"></DrawerNavigation>
    </v-navigation-drawer>
    <v-app-bar title="新建表单"></v-app-bar>
</template>

<script>
export default {

}
</script>

<style>
.left {
    float: left;
}

.right {
    float: right;
}
</style>