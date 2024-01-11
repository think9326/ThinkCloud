
import type formDetailVue from './formDetail.vue';
<!-- FormContainer.vue -->
<template>
    <div>
        <div class="form-container" @drop="dropForm" @dragover.prevent>
            <div class="form-item" v-for="(form, index) in forms" :key="index" @click="getComponentProperties(index)" >
                <!-- 根据表单类型渲染对应的组件 -->
                <v-row>
                    <v-col cols="10">
                        <component :is="form.component" ref="form.component" :title="form.title"
                            @click="selectComponent(form)" />
                    </v-col>
                    <v-col cols="2"><v-btn @click="removeForm(index)" class="delete-button">删除</v-btn></v-col>
                </v-row>
            </div>
        </div>
        <FormDetail :selectedComponent="selectedComponent" :modifyProperty="modifyProperty" />
    </div>
</template>
  
<script>
import FormDetail from './formDetail.vue';
import TextField from './textField.vue';
import ConboBox from './conboBox.vue';
import RadioButton from './radioButton.vue';
export default {
    components: {
        FormDetail,
    },
    data() {
        return {
            forms: [],
            selectedComponent: null,
        };
    },
    methods: {
        addForm(formType) {
            const title = prompt('请输入标题');
            // 根据按钮类型添加对应的表单组件到 forms 数组
            switch (formType) {
                case 'textField':
                    this.forms.push({ type: '单行输入', component: TextField, title });
                    break;
                case 'conboBox':
                    this.forms.push({ type: '下拉单选', component: ConboBox, title });
                    break;
                case 'radioButton':
                    this.forms.push({ type: '单选按钮', component: RadioButton, title });
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
        selectComponent(component) {
            this.selectedComponent = component;
            console.log(component.object)
        },
        getComponentProperties(index) {
            // 使用 ref 获取动态组件的引用
            const dynamicComponent = this.$refs.dynamicComponent[index];

            // 访问组件的属性
            const title = dynamicComponent.title;
            // 在这里可以对属性进行进一步处理
            console.log('动态组件的标题是：', title);
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
  