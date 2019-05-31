<!-- html部分 -->
<template>
	
	<div>
		
		<div class="date">
			<el-date-picker
			  v-model="years"
			  type="year"
			  placeholder="选择日期"
			  value-format='yyyy'>
			</el-date-picker>
			<el-button @click=fn()>查询</el-button>
		</div>
		<div class="div">	<h1>港口作业量对比图</h1>
		<ve-line :data="chartData"></ve-line></div>
		<div class="div">	<h1>港口能耗比对比图</h1>
		<ve-histogram :data="chartData2"></ve-histogram></div>
		
		</div>
			
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		
		data() {
			return {
				years:'2018',
				
				chartData: {
				  columns: [],
				  rows: []
				},
				chartData2: {
				  columns: [],
				  rows: []
				}
				}
		},
		methods:{
			fn(){
				var url = this.baseUrl+"/devInfo/amount"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData = res.data;
				})
				var url = this.baseUrl+"/devInfo/consume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData2 = res.data;
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
