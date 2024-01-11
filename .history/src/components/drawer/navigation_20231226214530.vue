<template>
    <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="主页" value="home" @click="triggerEvent('home')"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" title="工作台" value="workbenches"
            @click="triggerEvent('workbenches')"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="我的表单" value="myForm" @click="triggerEvent('myForm')"></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="我的团队" value="myTeam" @click="triggerEvent('myTeam')"></v-list-item>
    </v-list>
</template>

<script>
export default {
    methods: {
        triggerEvent(value) {
            // 在触发事件时传递参数
            this.$emit('child-clicked', value);
        },
    },
}
</script>

<style></style>