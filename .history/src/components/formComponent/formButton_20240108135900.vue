<!-- FormButton.vue -->
<template>
    <v-btn @click="addForm" draggable="true" @dragstart="startDrag">{{ buttonText }}</v-btn>
</template>
  
<script>
export default {
    props: {
        buttonText: String,
        formType: String,
    },
    methods: {
        addForm() {
            // 向父组件发送事件，通知添加表单
            this.$emit('add-form', this.formType);
        },
        startDrag(event) {
            // 拖拽开始时设置拖动数据
            event.dataTransfer.setData('text/plain', this.formType);
        },
    },
};
</script>
  