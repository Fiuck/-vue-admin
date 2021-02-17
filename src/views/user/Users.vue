<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="30">
        <el-col :span="6"
          ><el-input
            placeholder="请输入内容"
            v-model="queryParams.query"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addUser">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-row>
        <el-table :data="userList" border style="width: 100%" stripe>
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="username" label="姓名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="mobile" label="电话"></el-table-column>
          <el-table-column prop="role_name" label="角色"></el-table-column>
          <el-table-column prop="mg_state" label="状态">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.mg_state"> </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <!-- 编辑按钮 -->
              <el-tooltip
                class="item"
                effect="dark"
                content="编辑用户"
                placement="top"
                :enterable="false"
              >
                <el-button
                  type="primary"
                  size="mini"
                  icon="el-icon-edit"
                ></el-button>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="删除用户"
                placement="top"
                :enterable="false"
              >
                <!-- 删除 -->
                <el-button
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                ></el-button>
              </el-tooltip>

              <el-tooltip
                class="item"
                effect="dark"
                content="分配角色"
                placement="top"
                :enterable="false"
              >
                <!-- 分配角色 -->
                <el-button
                  type="warning"
                  size="mini"
                  icon="el-icon-setting"
                ></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      queryParams: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      userList: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    // 初始化用户列表
    getUsers() {
      this.$request({
        url: "/users",
        method: "get",
        params: this.queryParams,
      }).then((config) => {
        this.userList = config.data.users;
      });
    },
    // 添加用户
    addUser() {},
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
