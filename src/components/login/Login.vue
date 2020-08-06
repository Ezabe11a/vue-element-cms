<template>
  <div class="login">
    <div class="login_box">
      <div class="title">登录系统</div>
      <div>
        <el-input v-model="username" @input="isSpace" placeholder="用户名"></el-input>
      </div>
      <div>
        <el-input v-model="password" @input="isSpace"  placeholder="密码" show-password></el-input>
      </div>
      <div>
        <el-button type="primary" @click="login"  :disabled="space">登录</el-button>
      </div>
      <div>
        <el-button type="primary" @click="skipReg"  >去注册</el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
      space: true
    };
  },
  methods: {
    login() {
      let data = {
        username: this.username,
        password: this.password,
      };
      this.$http.fetchLogin(data).then((res) => {
        localStorage.setItem("token", res.token);
        const h = this.$createElement;
        this.$notify.success({
          title: '恭喜',
          message: h('i', { style: 'color: teal'}, '登录成功')
        });

        this.$router.push('/home')
        // console.log(res);
      });
    },
    isSpace() {
      if (this.username && this.password) {
        this.space = false
      } else {
        this.space = true
      }
    },
    skipReg() {
      this.$router.push('/regist')
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  background: linear-gradient(141deg, #bbd2c5 15%, #536976 75%);
  height: 100%;
  width: 100%;
  color: rgb(238, 238, 238);
  .login_box {
    width: 370px;
    margin: 0 auto;
    padding-top: 150px;
    & > div {
      line-height: 70px;
    }
    & > .title {
      font-size: 40px;
      text-align: center;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>