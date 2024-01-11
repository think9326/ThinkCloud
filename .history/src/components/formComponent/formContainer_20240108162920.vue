<!-- FormContainer.vue -->
<template>
    <div class="form-container" @drop="dropForm" @dragover.prevent>
        <div class="form-item" v-for="(form, index) in forms" :key="index">
            <!-- 根据表单类型渲染对应的组件 -->
            <v-row>
                <v-col cols="10">
                    <component :is="form.component" />
                </v-col>
                <v-col cols="2"><v-btn @click="removeForm(index)" class="delete-button">删除</v-btn></v-col>
            </v-row>
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
                case 'textField':
                    this.forms.push({ component: TextField });
                    break;
                case 'conboBox':
                    this.forms.push({ component: ConboBox });
                    break;
                case 'radioButton':
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
        removeForm(index) {
            this.forms.splice(index, 1);
        },
        test(index) {
            console.log(index);
        },
    },
};
</script>
  
<style scoped>
.form-container {
    border: 2px dashed #ccc;
    padding: 10px;
    min-height: 200px;
}

.form-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.delete-button {
    margin-left: 10px;
}

/* Ensure that the form component and delete button are in the same line */
.component {
    flex: 1;
    /* Allow the form component to take up remaining space */
}
</style>
  