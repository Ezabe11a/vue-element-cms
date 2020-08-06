<template>
  <div class="app">
    <router-view v-if='$route.path=="/login"' name="login"></router-view>
    <router-view v-else-if='$route.path=="/regist"' name="regist"></router-view>
    <Layout v-else />
  </div>
</template>

<script>
import { Layout } from "@/components";
export default {
  name: "App",
  components:{
    Layout
  },
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
