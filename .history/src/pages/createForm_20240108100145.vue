<template>
    <v-container class="main">
        <v-row>
            <v-col cols="2">
                <div class="moudle">
                    <v-btn @mousedown="handleMouseDown" draggable="true">
                        当行输入
                    </v-btn>
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
                            <div @dragover.prevent @drop="handleDrop">
                                <!-- 动态渲染的组件将会显示在这里 -->
                                <component :is="dynamicComponent"></component>
                            </div>
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
import SingleLineInput from '../components/formComponent/singleLineInput.vue' // 单行输入框组件
export default {
    data() {
        return {
            dynamicComponent: null,
        };
    },
    methods: {
        handleDrop(event) {
            // 阻止默认的拖动行为
            event.preventDefault();

            // 获取拖动的数据
            const draggedType = event.dataTransfer.getData('text/plain');

            // 根据拖动的类型生成相应的组件
            if (draggedType === 'single-line-input') {
                // 将单行输入框组件添加到 dynamicComponent 中
                this.dynamicComponent = SingleLineInput;
            }
        },
        handleMouseDown(event) {
            // 在鼠标按下时触发拖拉拽，并传递数据
            event.dataTransfer.setData('text/plain', 'single-line-input');
        }
    }
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