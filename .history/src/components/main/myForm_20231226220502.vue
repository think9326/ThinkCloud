<template>
  <v-container>
    <r-row>
      <v-col>
        <v-btn prepend-icon="mdi mdi-table-plus">
          <nuxt-link to="addNewForm">
            新建表单
          </nuxt-link>
        </v-btn>
      </v-col>
    </r-row>
    <v-row align="start" no-gutters style="height: 150px;">
      <v-col v-for="n in 10" :key="n">
        <v-card max-width="280">
          <v-card-text>
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">
              be•nev•o•lent
            </p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.<br>
              "a benevolent smile"
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="deep-purple-accent-4">
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.v-card {
  margin: 5px;
  float: left;
}
</style>