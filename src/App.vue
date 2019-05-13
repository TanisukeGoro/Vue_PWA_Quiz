<template>
  <div id="app">
    <div class="blank"></div>
    <header>
      <span>Quiz PWA</span>
    </header>
    <main>

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
}



</script>

<style>
body {
  margin: 0;
  background-color: #C8DDE6;

}
.blank{
  display: inline-block;
  margin-bottom: 30px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #73B8D6;
  color: #ffffff;
  left: 0;
  position:fixed;
  top:0;
  width:100%;
  z-index:24;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
