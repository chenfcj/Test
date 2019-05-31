<!-- html部分 -->
<template>
	
	<div>
	<center>
		<div class="date">
			<el-date-picker
			  v-model="years"
			  type="year"
			  placeholder="选择日期"
			  value-format='yyyy'>
			</el-date-picker>
			<el-button @click="fn()">查询</el-button>
		</div>
				<el-table :data="list">
					<el-table-column prop="devname" label="设备名称" width="80"></el-table-column>
					<el-table-column prop="amount" label="作业量" width="120"></el-table-column>
					<el-table-column prop="consume" label="能耗(折标煤)" width="120"></el-table-column>
					<el-table-column prop="cost" label="维修成本" width="180"></el-table-column>
				</el-table>
</center>
			
			
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		
		data() {
			return {
				years:'2018',
				list:[]
			}	
		},
		methods:{
			fn(){
				var url = this.baseUrl+"/devInfo/cost"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.list = res.data;
				})
				
				
				
				
				
				
			}
		},
		mounted:function(){
			this.fn();
			
			
			
		}
	}
</script>
<!-- css部分 -->
<style>
.div{
	width: 500px;
	height: 400px;
	display: inline-block;
	
}
.date{
		margin-top: 10px;
	}
</style>
