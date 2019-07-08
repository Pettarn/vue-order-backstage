<template>
  <div id="homePage">
    <headbar></headbar>
    <div id="app">
      <div id="app-navbar">
        <navbar></navbar>
      </div>
      <div id="app-view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import headbar from '../headbar'
import navbar from '../navbar'
export default {
  components: {
    navbar,
    headbar,
  }
}
</script>

<style scoped>
#app {
  position: relative;
  top: 50px;
  display: grid;
  grid-template: 1fr / 20% 80%;
  width: 100%;
}
/* 让两个子容器中的元素水平居中 */
#app>div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#app-navbar {
  position: relative;
  width: 100%;
}
#app-view {
  position: relative;
  width: 100%;
}
</style>
