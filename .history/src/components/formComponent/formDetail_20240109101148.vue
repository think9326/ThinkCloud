<template>
  <div>
    <p>接收到的数据：{{ receivedData }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      receivedData: "",
    };
  },
  methods: {
    receiveData(data) {
      this.receivedData = data;
    },
  },
  mounted() {
    this.$on("data-received", this.receiveData);
  },
};
</script>