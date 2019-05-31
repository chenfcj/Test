<template>
	<div style='text-align: center;'>
		<h1>添加设备信息</h1>
	<el-row>
			<el-col :span="12"> 
			 <el-select  v-model="typeid" style='width:300px;margin-top: 20px;'placeholder='请选择设备类别'>
			 <el-option v-for="(obj,index) in baseDevtype" :value="obj.typeid" :key="obj.typename">{{obj.typename}}</el-option>
			</el-select>
            </el-col>
		<el-col :span="12"> 
		 <el-select  v-model="compid" style='width:300px;margin-top: 20px;'placeholder='请选择所属企业'>
			<el-option v-for="(obj,index) in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
		</el-select>
		 
			
		 </el-col>
	</el-row>
		<el-row>
		  <el-col :span="12"> 
		  <el-date-picker  v-model='devdate' type="date"placeholder="选择日期" style='width:300px;margin-top: 20px;' value-format='yyyy-MM-dd'></el-date-picker></el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-t455op: 20px;' placeholder='请输入责任人' v-model='devuser'></el-input> </el-col>
		</el-row>
		<el-row>
			
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入设备名称' v-model='devname'></el-input> </el-col>
		   <el-col :span="12"> <span></span> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				devname:'',
				compid:'',
				devdate:'',
				devuser:'',
				typeid:'',
				baseDevtype:[],
				baseCompany:[]
				 
	

			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/insert"
				// 传递给后端的数据
				var data = {devname:this.devname,compid:this.compid,devdate:this.devdate,
							devuser:this.devuser,typeid:this.typeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/DeviceList'});
				})
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				
				this.baseCompany=res.data;
			});
			var url = this.baseUrl+"/baseDevtype/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				
				this.baseDevtype=res.data;
			});
		}
	}
</script>

<style>

</style>
