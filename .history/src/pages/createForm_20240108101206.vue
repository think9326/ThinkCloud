<template>
    <v-container class="main">
        <v-row>
            <v-col cols="2">
                <div class="moudle">
                    <v-row>
                        <v-col>
                            <v-btn @click="addInput">生成单行输入框</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn @click="addCheckbox">生成多选按钮</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn @click="addSelect">生成下拉选择框</v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="8">
                <v-row>
                    <v-col>
                        <div class="formTitle">
                            formTitle
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <div class="assemblyTable">
                            <v-row v-for="(form, index) in forms" :key="index">
                                <v-col>
                                    <component :is="form.type" v-model="form.value" />
                                </v-col>
                                <v-col>
                                    <v-btn @click="removeForm(index)">移除表单</v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="2">
                <div class="attribute">
                    attribute
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TextField from "./components/formComponent/textField.vue";
import ConboBox from "~/components/formComponent/conboBox.vue";
import RadioButton from "~/components/formComponent/radioButton.vue";
export default {
    data() {
        return {
            forms: [],
        };
    },
    components: {
        TextField,
        ConboBox,
        RadioButton
    },
    methods: {
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
    text-align: center;
}

.assemblyTable {
    width: 100%;
    height: 100vh;
    float: right;
    background-color: red;
}
</style>