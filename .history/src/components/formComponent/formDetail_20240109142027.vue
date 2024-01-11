<template>
  <div>
    <p>接收到的数据：{{ receivedData }}</p>
  </div>
</template>

<script>
export default {
  props: {
    receivedData: {
      type: String, // 假设 receivedData 是字符串类型
      default: "",
    },
  },
};
</script>