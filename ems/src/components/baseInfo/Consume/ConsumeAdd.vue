<!-- html部分 -->
<template>
	<div style='text-align: center;'>
		<h1>修改能耗信息</h1>
		<el-row>
			  <el-col :span="12"> 
					<el-select style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devid'>
						<el-option v-for="obj in baseDevice" :value="obj.devid"  :key="obj.devname">{{obj.devname}}</el-option>
					</el-select>
			  </el-col>
			   <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电耗(kw.h)' v-model='electric'></el-input></el-col>
		</el-row>
		<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入水耗(吨)' v-model='water'></el-input></el-col>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入油耗(L)' v-model='oil'></el-input></el-col>  
		</el-row>
		<el-row>
			<el-col :span="12"> 
				 <el-select style='width:300px;margin-top: 20px;' placeholder='请选择报岗人' v-model='reportid'>
				 	<el-option v-for="obj in produceReport" :value="obj.reportid"  :key="obj.reportuser">{{obj.reportuser}}</el-option>
				 </el-select>
			</el-col>
			<el-col :span="12"></el-col>
		</el-row>
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
		
</template>
<!-- js部分 -->
<script>
	export default {
		data() {
			return {
				devid:'',
				water:'',
				electric:'',
				oil:'',
				reportid:'',
				produceReport:[],
				baseDevice:[],
				consumeid:''
			};
		},
		methods:{
			saveAdd(){
					// 后端网址
					var url = this.baseUrl+"/energyConsume/insert"
					// 传递给后端的数据
					var data = {devid:this.devid,water:this.water,electric:this.electric,
							oil:this.oil,reportid:this.reportid,consumeid:this.consumeid};
					this.$axios.post(url,this.$qs.stringify(data),{
						headers: {
							'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
						}
					}).then(res=>{
						// res是后端的响应
						this.$message("添加成功");
						this.$router.push({path:'/ConsumeList'});
					})
				},
				cancel(){
					this.$router.go(-1);
				}
			},
			mounted:function(){
				var url = this.baseUrl+"/produceReport/list"
				// 传递给后端的数据
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.produceReport=res.data;
				})
				
				var url = this.baseUrl+"/baseDevice/list"
				// 传递给后端的数据
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.baseDevice=res.data;
				})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
