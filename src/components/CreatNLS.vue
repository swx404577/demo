<template>
  <div class="count">
    <div class="count_top">
		<div class="input_box">
			<input type="file" @change="updateFile($event)" class="file_input">
			<span class="file_sapn">请选择文件</span>
		</div>

	</div>
    <div class="count_bottom">
		<tablePage></tablePage>
	</div>
  </div>
</template>

<script>
import XLSX from 'xlsx';
import tablePage from "../components/table";
console.log(XLSX)
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "NLS"
    };
  },
  created() {

  },
  methods:{
	  updateFile(e){
		  var files = e.target.files;
			if(files.length == 0) return;
			var f = files[0];
			if(!/\.xlsx$/g.test(f.name)) {
				alert('仅支持读取xlsx格式！');
				return;
			}
			this.readWorkbookFromLocalFile(f, function(workbook) {
				var sheetNames = workbook.SheetNames; // 工作表名称集合
				var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
				var csv = XLSX.utils.sheet_to_csv(worksheet);
				console.log(csv);
				debugger
				localStorage.setItem('csv',csv.split('\n'));
			});
	  },
	  readWorkbookFromLocalFile(file, callback) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook = XLSX.read(data, {type: 'binary'});
			if(callback) callback(workbook);
		};
		reader.readAsBinaryString(file);
	}
	//  readWorkbook(workbook) {
	// 	var sheetNames = workbook.SheetNames; // 工作表名称集合
	// 	var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
	// 	var csv = XLSX.utils.sheet_to_csv(worksheet);
	// 	// document.getElementById('result').innerHTML = csv2table(csv);
	// }
  },
  components: {
    tablePage: tablePage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.count{
	width: calc(100% - 10px);
	height: calc(100% - 10px);
	padding: 5px;
}
.count_top {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  background: #DCDFE6;
}
.count_bottom{
	width: 100%;
	height: calc(100% - 151px);
}
.input_box {
    width: 100%;
    height: 60px;
    position: relative;
    float: left;
}
.file_sapn{
	width: 120px;
	height: 32px;
	display: block;
	float: left;
	background: #409EFF;
	border-radius: 4px;
	color: #fff;
	text-align: center;
	line-height: 32px;
	font-size: 14px;
	cursor: pointer;
	user-select: none;
	margin-top: 15px;
    margin-left: 30px;
}
input.file_input {
    position: absolute;
    width: 120px;
    height: 30px;
    opacity: 0;
    left: 30px;
    top: 19px;
    cursor: pointer;
}
</style>
