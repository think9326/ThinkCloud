<template>
    <div class="login-container">
        <div class="left-container">
            <v-img class="login-introduce-img" src="../assets/images/img04.jpg" cover></v-img>
        </div>
        <div class="right-container">
            <div class="login-box">
                <v-card>
                    <v-tabs bg-color="deep-purple-darken-4" center-active>
                        <v-tab>登录</v-tab>
                        <v-tab>注册</v-tab>
                    </v-tabs>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.login-container {
    height: 100%;
    display: flex;
}

.left-container {
    width: 70%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.login-introduce-img {
    width: 100%;
    /* 图片宽度100% */
    height: 100%;
    /* 图片高度100% */
    object-fit: cover;
    /* 保持图片比例并填满容器 */
    object-position: center;
    /* 图片居中显示 */
}

.login-box {
    display: flex;
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */
      height: 100vh; /* 设置容器高度为视窗高度，可以根据需要调整 */
}
</style>