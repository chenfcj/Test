<template>
	<div style='text-align: center;'>
		<h1>修改报岗信息</h1>
		<el-row>
			<el-col :span="12"><el-input style='width:300px;margin-top: 20px;' placeholder='请输入船队名称' v-model='shipname'></el-input> </el-col>
			<el-col :span="12"><el-input style='width:300px;margin-top: 20px;' placeholder='请输入装载量(吨)' v-model='capacity'></el-input> </el-col>
		</el-row>
		<el-row>
			  <el-col :span="12"> 
				<el-date-picker  v-model='planjobtime' type="datetime"placeholder="预计到港时间" style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd HH:mm:ss'></el-date-picker></el-col>
			  <el-col :span="12"> 
				<el-date-picker  v-model='startjobtime' type="datetime"placeholder="实际到港时间" style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd HH:mm:ss'></el-date-picker></el-col>
		</el-row>
		<el-row>
			  <el-col :span="12"> 
				<el-date-picker  v-model='completetime' type="datetime"placeholder="完成时间" style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd HH:mm:ss'></el-date-picker></el-col>
			  <el-col :span="12"> 
				<el-select  v-model="flowid" style='width:300px;margin-top: 20px;'placeholder='请选择流程'>
				 <el-option v-for="(obj,index) in baseFlow" :value="obj.flowid" :key="obj.flowname">{{obj.flowname}}</el-option>
				</el-select>
				</el-col>
		</el-row>
		<el-row>
			  <el-col :span="12"><el-input style='width:300px;margin-top: 20px;' placeholder='报岗人' v-model='reportuser'></el-input> </el-col>
			  <el-col :span="12"> 
				<el-select  v-model="compid" style='width:300px;margin-top: 20px;'placeholder='请选择企业'>
				 <el-option v-for="(obj,index) in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
				</el-select>
				</el-col>
		</el-row>
		
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				
			shipname:'',
			capacity:'',
			planjobtime:'',
			startjobtime:"",
			completetime:'',
			reportuser:'',
			compid:'',
			flowid:'',
			reportid:'',
			baseCompany:[],
			baseFlow:[]
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/produceReport/update"
				// 传递给后端的数据
				var data = {shipname:this.shipname,capacity:this.capacity,planjobtime:this.planjobtime,startjobtime:this.startjobtime,
				completetime:this.completetime,reportuser:this.reportuser,compid:this.compid,flowid:this.flowid,reportid:this.reportid};

				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/ReportList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 接收路由传递的数据
			var row = this.$route.params.row;
			// 回显
		    this.shipname = row.shipname;
			this.capacity = row.capacity;
			this.planjobtime = row.planjobtime;
			this.startjobtime = row.startjobtime;
			this.completetime = row.completetime;
			 this.reportuser = row.reportuser;
			this.compid = row.compid;
			this.flowid = row.flowid;
			this.reportid = row.reportid;
			
	 
			 
			  
			 
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				
				this.baseCompany=res.data;
			});
			var url = this.baseUrl+"/baseFlow/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				
				this.baseFlow=res.data;
			})
			
			 
		
		 
		}
		
	}
</script>

<style>

</style>
