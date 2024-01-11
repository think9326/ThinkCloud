<template>
    <v-container class="main">
        <v-row>
            <v-col cols="2">
                <div class="moudle">
                    <v-btn depressed draggable="true" @dragstart="handleDragStart">
                        当行输入
                    </v-btn>
                    <v-btn depressed>
                        多行输入
                    </v-btn>
                    <v-btn depressed>
                        下拉单选
                    </v-btn>
                    <v-btn depressed>
                        单选按钮
                    </v-btn>
                    <v-btn depressed>
                        多选按钮
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
                        <div class="assemblyTable" @dragover.prevent="allowDrop" @drop="handleDrop">
                            assemblyTable
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
const handleDragStart = (event) => {
    // 设置拖动的数据，可以是任意数据
    event.dataTransfer.setData("text/plain", "button");
};

const allowDrop = (event) => {
    // 阻止默认事件，允许拖放
    event.preventDefault();
};

const handleDrop = (event) => {
    // 阻止默认事件，获取拖动的数据
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");

     // 在这里处理拖放的逻辑
  if (data === "button") {
    const button = document.createElement("button");
    button.innerText = "新按钮";
    event.target.appendChild(button);
  }
};
export default {

}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    text-align: center;
}

.moudle {
    width: 100%;
    height: 100%;
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
    height: 100%;
    float: right;
}
</style>