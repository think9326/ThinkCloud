<template>
    <v-container class="main">
        <v-row>
            <v-col cols="6">
                <div class="moudle">
                    moudle
                </div>
            </v-col>
            <v-col cols="12">
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
                            assemblyTable
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="6">
                <div class="attribute">
                    attribute
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
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
}

.formTitle {
    width: 100%;
    height: 100%;
    text-align: center;
}

.assemblyTable {
    width: 100%;
    height: 100%;
}
</style>