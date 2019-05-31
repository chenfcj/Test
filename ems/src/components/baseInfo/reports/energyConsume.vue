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
		<div class="div">	<h1>企业能耗比对比图(折线图)</h1>
		<ve-line :data="chartData"></ve-line></div>
		<div class="div">	<h1>企业作业量对比图 (单位：万吨)</h1>
		<ve-histogram :data="chartData2"></ve-histogram></div>
		<div class="div">	<h1>企业耗电量对比图 (环形图)</h1>
		 <ve-ring :data="chartData3"></ve-ring></div>
		<div class="div">	<h1>企业耗水对比图 (雷达图)</h1>
		<ve-radar :data="chartData4"></ve-radar></div>
		<div class="div"><h1>企业耗油量对比图 (柱状图)</h1>
		<ve-histogram :data="chartData5"></ve-histogram></div>
		<div class="div"><h1>设备完好率对比图 (饼图)</h1>
		 <ve-pie :data="chartData6"></ve-pie></div>
			
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
				},
				chartData3: {
				  columns: [],
				  rows: []
				},
				chartData4: {
				  columns: [],
				  rows: []
				},
				chartData5: {
				  columns: [],
				  rows: []
				},
				chartData6: {
				  columns: [],
				  rows: []
				}
				
			};
		},
		methods:{
			fn(){
				var url = this.baseUrl+"/energyConsume/flowConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData = res.data;
				})
				var url = this.baseUrl+"/energyConsume/devTypeConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData2 = res.data;
				})
				
				var url = this.baseUrl+"/energyConsume/devConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData3 = res.data;
				})
				
				var url = this.baseUrl+"/energyConsume/waterConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData4 = res.data;
				})
				var url = this.baseUrl+"/energyConsume/oilConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData5 = res.data;
				})
				var url = this.baseUrl+"/energyConsume/electricConsume"
				// 传递给后端的数据
				var data = {year:this.years};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.chartData6 = res.data;
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
