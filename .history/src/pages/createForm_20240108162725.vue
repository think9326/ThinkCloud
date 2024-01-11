<template>
    <v-container class="main">
        <v-row>
            <v-col cols="2">
                <div class="moudle">
                    <div>
                        <FormButton buttonText="单行输入" formType="textField" @add-form="addForm" />
                        <FormButton buttonText="下拉框" formType="conboBox" @add-form="addForm" />
                        <FormButton buttonText="单选按钮" formType="radioButton" @add-form="addForm" />
                    </div>
                </div>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col>
                        <div class="formTitle">
                            <h4 @click="editText" v-if="!editing">{{ formTitle }}</h4>
                            <v-text-field style="width: 100px;" v-model="formTitle" label="表单名称" prepend-icon="$vuetify"
                                variant="underlined" @blur="stopEditing" v-if="editing"></v-text-field>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div class="assemblyTable">
                            <FormContainer ref="formContainer" @select-component="selectComponent" />
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2">
                <div class="attribute">
                    <FormDetail :selectedComponent="selectedComponent" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FormButton from "../components/formComponent/formButton.vue";
import FormContainer from "../components/formComponent/formContainer.vue";
import FormDetail from "../components/formComponent/formDetail.vue";
export default {
    data() {
        return {
            editing: false,
            formTitle: "点击文字编辑",
            selectedComponent: null,
        };
    },
    components: {
        FormButton,
        FormContainer,
        FormDetail
    },
    methods: {
        editText() {
            // 点击文字时开始编辑
            this.editing = true;
        },
        stopEditing() {
            // 失焦时停止编辑
            this.editing = false;
        },
        addForm(formType) {
            // 通过 ref 调用 FormContainer 组件的方法添加表单
            this.$refs.formContainer.addForm(formType);
        },
        selectComponent(component) {
            this.selectedComponent = component;
        },
    },
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    text-align: center;
}

.moudle {
    width: 100%;
    height: 100vh;
    text-align: center;
    background-color: aqua;
    float: left;
}

.formTitle {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.assemblyTable {
    width: 100%;
    height: 100vh;
    float: right;
}
</style>