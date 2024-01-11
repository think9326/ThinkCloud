<template>
    <div class="lgoin-form">
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col>
                    <v-card>
                        <v-card-title class="headline">登录</v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="login">
                                <v-text-field v-model="username" label="用户名" required></v-text-field>
                                <v-text-field v-model="password" label="密码" type="password" required></v-text-field>
                                <v-btn type="submit" color="primary">登录</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            // 在这里处理登录逻辑
            console.log('登录信息:', this.username, this.password);
        },
    },
}
</script>

<style>
.login-form {
    display: flex;
    align-items: center;
    /* 设置垂直居中 */
    justify-content: center;
    /* 设置水平居中 */
    height: 100vh;
    /* 设置容器高度为视窗高度，可以根据需要调整 */
}

n-form {
    padding: 20px;
}

</style>