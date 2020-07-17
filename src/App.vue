<template>
  <div id="app">
    <!-- 全局窗口 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style lang="scss">
  .disF {
    display: flex;
  }

  .f1 {
    flex: 1;
  }

  .f2 {
    flex: 2;
  }

  .f3 {
    flex: 3;
  }

  .f4 {
    flex: 4;
  }

  .f5 {
    flex: 5;
  }
</style>
<style>
	.tcPad .el-dialog {
		padding-right: 15px;
		margin-top: 27vh;
	}
</style>
