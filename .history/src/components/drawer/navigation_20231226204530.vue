<template>
    <v-card>
        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
                subtitle="sandra_a88@gmailcom"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="主页" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="工作台" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="我的表单" value="starred"></v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {

}
</script>

<style></style>