
import type conboBoxVue from './conboBox.vue';
<!-- FormContainer.vue -->
<template>
    <div class="form-container" @drop="dropForm" @dragover.prevent>
      <v-btn @click="removeLastForm" v-if="forms.length > 0">删除最后一个表单</v-btn>
      <div v-for="(form, index) in forms" :key="index">
        <!-- 根据表单类型渲染对应的组件 -->
        <component :is="form.component" />
      </div>
    </div>
  </template>
  
  <script>
import TextField from './textField.vue';
import ConboBox from './conboBox.vue';
import RadioButton from './radioButton.vue';
  export default {
    data() {
      return {
        forms: [],
      };
    },
    methods: {
      addForm(formType) {
        // 根据按钮类型添加对应的表单组件到 forms 数组
        switch (formType) {
          case 'TextField':
            this.forms.push({ component: TextField });
            break;
          case 'ConboBox':
            this.forms.push({ component: ConboBox });
            break;
          case 'RadioButton':
            this.forms.push({ component: RadioButton });
            break;
          default:
            break;
        }
      },
      dropForm(event) {
        // 拖拽结束时根据拖动数据添加表单组件到 forms 数组
        const formType = event.dataTransfer.getData('text/plain');
        this.addForm(formType);
      },
      removeLastForm() {
        // 删除最后一个表单
        this.forms.pop();
      },
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    border: 2px dashed #ccc;
    padding: 10px;
    min-height: 200px; /* 设置容器的最小高度，可以根据实际情况调整 */
  }
  </style>
  