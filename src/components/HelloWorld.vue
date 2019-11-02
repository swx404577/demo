<template>
  <div class="hello">
    <div class="left_menu">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-upload"></i>
            <span>NLS</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">NLS导入</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right_count">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
  display: flex;
}
.left_menu {
  width: 280px;
  height: 100%;
  background: rgb(84, 92, 100);
}
.right_count {
  width: calc(100% - 280px);
  height: 100%;
  background: #C0C4CC;
}
</style>
