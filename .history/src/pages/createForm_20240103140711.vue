<template>
    <v-app-bar title="新建表单"></v-app-bar>
    <v-navigation-drawer absolute permanent>
        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer absolute permanent right>
        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {

}
</script>