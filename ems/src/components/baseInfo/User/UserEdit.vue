<template>
	<div style='text-align: center;'>
		<h1>修改人员信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入姓名' v-model='cname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入性别' v-model='sex'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户名' v-model='username'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入密码' v-model='password'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入邮箱' v-model='email'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电话' v-model='telno'></el-input> </el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
			  <el-select  v-model="compid" style='width:300px;margin-top: 20px;'placeholder='请选择公司'>
			  <el-option v-for="obj in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
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
				userid:'',
				cname:'',
				sex:'',
				username:'',
				password:'',
				email:'',
				telno:'',
				compid:'',
				baseCompany:[],
				
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/update"
				// 传递给后端的数据
				var data = {userid:this.userid,cname:this.cname,
				sex:this.sex,username:this.username,password:this.password,
				email:this.email,telno:this.telno,compid:this.compid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("更新成功");
					this.$router.push({path:'/UserList'});
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
			this.cname = row.cname;
			this.sex = row.sex;
			this.username = row.username;
			this.password = row.password;
			this.email = row.email;
			this.telno = row.telno;
			this.userid = row.userid;
			this.compid = row.compid;
			
			
			// 传递给后端的数据
			var url = this.baseUrl+"/baseCompany/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				
				this.baseCompany=res.data;
			})
		
		 
		}
		
	}
</script>

<style>

</style>
