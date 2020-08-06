<template>
  <div class="layout">
    <el-container>
      <el-aside width="175px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "./Aside.vue";
import Header from "./topHeader.vue";
import Main from "./Main.vue";

export default {
  components: {
    Aside,
    Header,
    Main,
  },
};
</script>

<style lang="scss" scoped>

.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  overflow-x: auto;
  background: #bbd2c5;
}
.el-container {
  height: 100%;
}
.aside {
  background-color: #536976;
  height: 100%;
  color: #eee;
  padding-top: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 175px;
  overflow: auto;
}
.header {
  border-bottom: 1px solid #eee;
  height: 100%;
  line-height: 60px;
  background: white;
  padding: 0 25px;
  color: #536976;
  min-width: 850px;
}
.el-header {
  padding-left: 0;
  padding-right: 0;
}
.main {
  color: #536976;
  height: 100%;
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 175px;
  right: 0;
  overflow: auto;
  box-sizing: border-box;

  margin-left: 20px;
  padding: 25px;
  background: white;
  min-width: 900px;

}
</style>