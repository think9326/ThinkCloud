<template>
  <div v-for="i in 6">
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
      <v-card-actions>
        <v-btn variant="text" color="deep-purple-accent-4">
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>