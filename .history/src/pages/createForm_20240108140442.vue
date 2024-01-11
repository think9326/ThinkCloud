<template>
    <v-container class="main">
        <v-row>
            <v-col cols="2">
                <div class="moudle">
                    <div>
                        <FormButton buttonText="单行输入" formType="singleLineInput" @add-form="addForm" />
                        <FormButton buttonText="下拉框" formType="dropdown" @add-form="addForm" />
                        <FormButton buttonText="单选按钮" formType="radioButton" @add-form="addForm" />

                        <FormContainer ref="formContainer" />
                    </div>
                    <!-- <v-row>
                        <v-col>
                            <v-btn @click="addInput">生成单行输入框</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn @click="addCheckbox">生成多选按钮</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn @click="addSelect">生成下拉选择框</v-btn>
                        </v-col>
                    </v-row> -->
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
                            <v-container @dragover.prevent>
                                <v-row>
                                    <!-- 动态渲染的组件将会显示在这里 -->
                                    <v-col v-for="(component, index) in components" :key="index">
                                        <component :is="component" />
                                    </v-col>
                                </v-row>
                            </v-container>
                            <!-- <div class="component" v-for="(form, index) in forms" :key="index"
                                @show-properties="showProperties">
                                <v-row>
                                    <v-col>
                                        <component :is="form.type" v-model="form.value" />
                                    </v-col>
                                    <v-col>
                                        <v-btn @click="removeForm(index)">移除表单</v-btn>
                                    </v-col>
                                </v-row>
                            </div> -->
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2">
                <div class="attribute">
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TextField from "../components/formComponent/textField.vue";
import ConboBox from "../components/formComponent/conboBox.vue";
import RadioButton from "../components/formComponent/radioButton.vue";
export default {
    data() {
        return {
            components: [],
            forms: [],
            editing: false,
            formTitle: "点击文字编辑",
        };
    },
    components: {
        TextField,
        ConboBox,
        RadioButton
    },
    methods: {
        handleDrop(event) {
            // 阻止默认的拖动行为
            event.preventDefault();

            // 获取拖动的数据
            const draggedType = event.dataTransfer.getData('text/plain');

            // 根据拖动的类型生成相应的 Vuetify 组件
            if (draggedType === 'text-field') {
                // 将 v-text-field 组件添加到 components 数组中
                this.components.push('v-text-field');
            }
        },
        addInput() {
            this.forms.push({ type: "TextField", value: "" });
        },
        addCheckbox() {
            this.forms.push({ type: "RadioButton", value: [] });
        },
        addSelect() {
            this.forms.push({ type: "ConboBox", value: "" });
        },
        removeForm(index) {
            this.forms.splice(index, 1);
        },
        editText() {
            // 点击文字时开始编辑
            this.editing = true;
        },
        stopEditing() {
            // 失焦时停止编辑
            this.editing = false;
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