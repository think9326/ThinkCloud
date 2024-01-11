<template>
    <div class="login-container">
        <v-container>
            <v-row>
                <v-col cols="9">
                    <v-sheet>
                        <div class="left-container">
                            <v-img class="login-introduce-img" src="../assets/images/img04.jpg" cover></v-img>
                        </div>
                    </v-sheet>
                </v-col>
                <v-col cols="3">
                    <v-sheet>
                        <div class="right-container">
                            <div class="login-box">
                                登录
                            </div>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
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
}</style>