<template>
  <div class="aside">
    <h2>管理系统</h2>
    <el-menu
      :router='true'
      default-active="0"
      unique-opened
      class="el-menu-vertical-demo"
      background-color="#536976"
      text-color="#fff"
      active-text-color="#bbd2c5"
    >
      <!-- 第一大组：一层循环 -->
      <el-submenu v-for="sub in routes" :index="sub.id+''" :key="sub.id">
        <template slot="title">
          <i :class="sub.icon"></i>
          <span v-text="sub.text"></span>
        </template>
        <!-- 子导航：二层循环 -->
        <el-menu-item
          v-for="item in sub.children"
          :index="item.id+''"
          :key="item.id"
          :route="{'path':item.path.replace(':id',0),'component':item.component}"
        >
          <i :class="item.icon"></i>
          <span v-text="item.text"></span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import routes from "@/views/";
export default {
  data() {
    return {
      routes,
    };
  },
};
</script>

<style lang="scss" scoped>

.aside {
  height: 100%;
  .el-menu{
    border: none;
  }
  h2{
    margin-bottom: 30px;
  }
  & > h2 {
    text-align: center;
    line-height: 50px;
  }

}
</style>