<template>
  <div class="good-add">
    <h2>商品新增</h2>
    <div class="gd-form">
      <!-- 第一行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <span>商品名称：</span>
        </el-col>
        <el-col :span="19">
          <el-input v-model="info.name" placeholder="请输入商品名称"></el-input>
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <span>商品简介：</span>
        </el-col>
        <el-col :span="19">
          <el-input type="textarea" :rows="3" placeholder="请输入商品简介" v-model="info.desc"></el-input>
        </el-col>
      </el-row>

      <!-- 第三行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <span>商品价格：</span>
        </el-col>
        <el-col :span="19">
          <el-input v-model.number="info.price" placeholder="请输入商品价格"></el-input>
        </el-col>
      </el-row>

      <!-- 第四行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <span>商品品类：</span>
        </el-col>
        <el-col :span="19">
          <!-- v-model 是 :value 和 @input 的简写 -->
          <CateSelect v-model="info.cate" />
        </el-col>
      </el-row>

      <!-- 第五行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <span>商品图片：</span>
        </el-col>
        <el-col :span="19">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:8888/api/v1/upload/img"
            :show-file-list="false"
            :on-success="imgUpload"
          >
            <img v-if="info.img" :src="img.imgBaseUrl+info.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>

      <!-- 第六行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <span>是否热销：</span>
        </el-col>
        <el-col :span="19">
          <el-switch v-model="info.hot" active-color="#536976" inactive-color="#bbd2c5"></el-switch>
        </el-col>
      </el-row>

      <!-- 第七行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5">
          <span>商品排名：</span>
        </el-col>
        <el-col :span="19">
          <el-input-number v-model="info.rank" :min="0" :max="100000" label="给商品排序"></el-input-number>
        </el-col>
      </el-row>

      <!-- 第八行 -->
      <el-row type="flex" align="middle">
        <el-col :span="5"></el-col>
        <el-col :span="19">
          <el-button @click="submit" type="primary">提交商品</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { CateSelect } from "@/components/";
import img from "@/utils/img";

export default {
  components: {
    CateSelect,
  },
  data() {
    return {
      img,
      cates: [],
      info: {
        name: "",
        desc: "",
        price: "",
        cate: "",
        img: "",
        hot: false,
        rank: 0,
        create_time: Date.now(),
      },
    };
  },
  mounted() {
    let id = this.$route.params.id;
    if (id == 0) id = false;
    if (id) {
      // 这是编辑
      this.$http.fetchGoodDetail({ id }).then((res) => {
        this.info = res;
      });
    }
    // console.log(id);
  },
  methods: {
    imgUpload(res) {
      console.log("图片上传成功", res);
      this.info.img = res.data.url;
    },

    submit() {
      let id = this.$route.params.id;
      if (id == 0) id = false;
      let data = this.info;
      if (id) {
        data.id = id;
      }
      // console.log(id);
      // if (this.name && this.price && this.cate) {
      this.$http.fetchCreateGoods(data).then(() => {
        const h = this.$createElement;
        this.$notify.success({
          title: "success",
          message: h("i", { style: "color: teal" }, "提交成功"),
        });
      });

      this.info = {
        name: "",
        desc: "",
        price: "",
        cate: "",
        img: "",
        hot: false,
        rank: 0,
      };
      // } else {
      //     const h = this.$createElement;
      //     this.$notify.error({
      //       title: "提交失败",
      //       message: h("i", { style: "color: teal" }, "信息填写不全"),
      //     });
      //     return
      // }
      if (id != 0) {
        this.$router.push("/good/list");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gd-form {
  width: 50%;
  margin: 40px auto;
  padding-bottom: 50px;
}
.el-row {
  margin-bottom: 20px;
  .el-button {
    background-color: #536976;
    border-color: #536976;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
  }
}
</style>