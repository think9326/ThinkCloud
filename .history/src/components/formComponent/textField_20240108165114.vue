<!-- SingleLineInput.vue -->
<template>
    <v-text-field ref="textField" label="Label" variant="outlined" @click="getProperties"></v-text-field>
</template>
  
<script>
export default {
    // 单行输入框组件的逻辑
    getTextFieldValue() {
        // 使用ref获取v-text-field的引用
        const textField = this.$refs.myTextField;

        // 访问v-text-field的值
        const value = textField.label;

        // 在这里可以对值进行进一步处理
        console.log('TextField的值是：', value);
    },
}
</script>
  