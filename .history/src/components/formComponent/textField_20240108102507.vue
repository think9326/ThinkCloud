<!-- SingleLineInput.vue -->
<template>
    <v-text-field label="Label" variant="outlined" @click="showProperties"></v-text-field>
</template>
  
<script>
export default {
    // 单行输入框组件的逻辑
    methods: {
        showProperties() {
            // 通过点击事件将相关属性传递给父组件
            this.$emit('show-properties', { type: 'SingleLineInput', /* 其他属性 */ });
        }
    }
}
</script>
  