<!-- SingleLineInput.vue -->
<template>
    <div @click="test()">
        <v-text-field ref="textField" label="Label" variant="outlined" ></v-text-field>
    </div>
</template>
  
<script>
export default {
    // 单行输入框组件的逻辑
    methods: {
        test() {
            // 点击单行输入框时，获取单行输入框的实例
            const textField = this.$refs.textField;
            // 调用实例的方法
            console.log(textField["label"])
        },
    },
}
</script>
  