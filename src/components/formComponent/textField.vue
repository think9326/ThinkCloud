<template>
    <div @click="emitData">
        <v-text-field ref="textField" label="Lada" variant="outlined"></v-text-field>
    </div>
</template>
  
<script>
export default {
    // 单行输入框组件的逻辑
    data() {
        return {

        };
    },
    methods: {
        emitData() {
            // 点击单行输入框时，获取单行输入框的实例
            const textField = this.$refs.textField;
            // 调用实例的方法
            // Object.entries(textField).forEach(([key, value]) => {
            //     console.log(`${key}: ${value}`);
            // });
            this.$emit("data-emitted", textField);
        },
    },
}
</script>
  