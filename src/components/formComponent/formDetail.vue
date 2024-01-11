<template>
  <div>
    <p>接收到的数据:
      <span v-for="(value, key) in receivedData" :key="key">
        {{ key }}: {{ value }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    receivedData: {
      type: Object, // 假设 receivedData 是字符串类型
      default: "",
    },
  },
};
</script>