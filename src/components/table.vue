<template>
  <div class="tablePage">
    <el-table :data="tableData3" style="width: 100%" height="calc(100% - 0px)">
      <el-table-column fixed prop="date" label="KEY" width="150"></el-table-column>
      <el-table-column prop="name" label="English" width="120"></el-table-column>
      <el-table-column prop="province" label="France" width="120"></el-table-column>
      <el-table-column prop="city" label="Mexico" width="120"></el-table-column>
      <el-table-column prop="address" label="Germany" width="120"></el-table-column>
      <el-table-column prop="zip" label="Philippines " width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
	  ],
	  tableHeader:[],
    };
  },
  created() {},
  methods: {
	  csvData(){
		  debugger
		  let csvStdata = localStorage.getItem('csv');
		  this.tableHeader = csvStdata.split("\n")[0];
	  }
  },
  mounted(){
	  this.csvData();
	  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tablePage {
  width: 100%;
  height: 100%;
}
</style>
