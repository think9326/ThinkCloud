<template>
    <v-container fluid>
        <v-radio-group v-model="radios" row>
                <div>Your favourite <strong>search engine</strong></div>
            <v-radio value="Google">
                    <div>Of course it's <strong class="success--text">Google</strong></div>
            </v-radio>
            <v-radio value="Duckduckgo">
                    <div>Definitely <strong class="primary--text">Duckduckgo</strong></div>
            </v-radio>
        </v-radio-group>
    </v-container>
</template>

<script>
export default {

}
</script>

<style></style>