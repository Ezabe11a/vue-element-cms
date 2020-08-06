<template>
  <div class="good-list">
    <h2>商品列表</h2>
    <div>
      <el-row type="flex" align="middle">
        <el-col :span="2" :offset="6">品类筛选</el-col>
        <el-col :span="4">
          <CateSelect v-model="cate" />
        </el-col>
      </el-row>
    </div>

    <div>
      <el-table :data="list" style="width: 60%">
        <el-table-column align="center" label="商品" width="220">
          <template slot-scope="scope">
            <img class="good-img" :src="img.imgBaseUrl+scope.row.img">
            <div v-text="scope.row.name">商品名称</div>
          </template>
        </el-table-column>

        <el-table-column label="商品描述" align="center" prop="desc" width="180"></el-table-column>

        <el-table-column label="价格" align="center" prop="price" width="100"></el-table-column>

        <el-table-column label="品类" align="center" prop="cate" width="80"></el-table-column>

        <el-table-column label="是否热销" align="center" prop="hot" width="60">
          <template slot-scope="scope">
              <span v-text="scope.row.hot"></span>
          </template>
        </el-table-column>

        <el-table-column label="商品热度" align="center" prop="rank" width="60"></el-table-column>

        <el-table-column label="创建时间" align="center" prop="create_time" width="100"></el-table-column>

        <el-table-column label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="SkipToAdd(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="gl-page">
      <el-pagination
        layout="prev, pager, next"
        :page-size="2"
        @current-change="pageChange"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { CateSelect } from "@/components/";
import img from '@/utils/img'

export default {
  components: {
    CateSelect,
  },
  data() {
    return {
      img,
      cate: "",
      page: 1,
      list: [],
      total: 0,
      hotter: false,
    };
  },
  watch: {
    cate() {
      this.page = 1;
      this.init();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let params = {
        cate: this.cate,
        page: this.page,
      };
      this.$http.fetchGoodAll(params).then((res) => {
        this.list = res.list;
        this.total = res.total;
      });
    },
    pageChange(page) {
      this.page = page;
      this.init();
    },
    SkipToAdd(row) {
      this.$router.push("/goodadd/" + row._id);
      // console.log(row.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.good-list {
  .el-table {
    margin: 0 auto;
  }
  .el-row {
    margin: 0 auto;
  }
  .el-pagination {
    margin-left: 47%;
  }
  h2 {
    margin-bottom: 30px;
  }
  .el-button:nth-of-type(1) {
    background-color: #bbd2c5;
    border-color: #bbd2c5;
    color: #536976;
  }
  .el-button:nth-of-type(2) {
    background-color: #536976;
    border-color: #536976;
  }
}
</style>