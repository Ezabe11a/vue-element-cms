<template>
  <div class="regist">
    <div class="regist_box">
      <div class="title">注册系统</div>
      <div>
        <el-input v-model="username" placeholder="用户名"></el-input>
      </div>
      <div>
        <el-input v-model="password" placeholder="密码" show-password @input="isSame"></el-input>
      </div>
      <div>
        <el-input v-model="password2" placeholder="确认密码" show-password @input="isSame"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="skipLogin">去登录</el-button>
      </div>
      <div>
        <el-button type="primary" @click="regist" :disabled="same">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regist",
  data: function () {
    return {
      username: "",
      password: "",
      password2: "",
      same: true,
    };
  },
  methods: {
    skipLogin() {
      this.$router.push("/login");
    },

    regist() {
      let data = {
        username: this.username,
        password: this.password,
      };
      this.$http.fetchRegist(data).then(() => {
        // localStorage.setItem("token", res.token);

        // 注册成功提示框
        const h = this.$createElement;
        this.$notify.success({
          title: "恭喜",
          message: h("i", { style: "color: teal" }, "注册成功"),
        });

        this.$router.push("/login");
        // console.log(res);
      });
    },
    isSame() {
      if (this.username && this.password && this.password2) {
        if (this.password === this.password2) {
          this.same = false;
        } else {
          this.same = true;
        }
      } else {
        this.same = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.regist {
  background: linear-gradient(141deg, #536976 15%, #bbd2c5 75%);
  height: 100%;
  width: 100%;
  color: rgb(238, 238, 238);
  .regist_box {
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