<template>
  <v-container class="bg-surface-variant mb-6">
    <v-row align="start" no-gutters style="height: 150px;">
      <v-col v-for="n in 3" :key="n">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="344">
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
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style></style>