<template>
    <div>
      <h2>属性编辑器</h2>
      <div v-if="selectedComponent">
        <h3>{{ selectedComponent.type }}</h3>
        <!-- 在这里显示和编辑组件的属性 -->
        <div v-for="(value, key) in selectedComponent.props" :key="key">
          <label>{{ key }}</label>
          <input v-model="selectedComponent.props[key]" />
        </div>
      </div>
      <div v-else>
        <p>点击组件以编辑属性</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedComponent // 通过 props 接收选中的组件
    },
  };
  </script>