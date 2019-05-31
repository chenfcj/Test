<template>
	<div>
		<h1 style="text-align: center">设备信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			
			<!-- <el-input style='width:160px' placeholder='设备类别' v-model='search_typeid'></el-input>
			<el-input style='width:160px' placeholder='所属企业' v-model='search_compid'></el-input> -->
			
			 <el-select  v-model="typeid" style='width:160px;margin-top: 20px;'placeholder='请选择设备类别'>
			 <el-option v-for="(obj,index) in baseDevtype" :value="obj.typeid" :key="obj.typename">{{obj.typename}}</el-option>
			</el-select>
			
			 <el-select  v-model="compid" style='width:160px;margin-top: 20px;'placeholder='请选择所属企业'>
				<el-option v-for="(obj,index) in baseCompany" :value="obj.compid" :key="obj.compname">{{obj.compname}}</el-option>
			</el-select>
			
			
			
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="devid" label="ID" width="80"></el-table-column>
				<el-table-column prop="devname" label="设备名称" width="120"></el-table-column>
				<el-table-column prop="baseDevtype.typename" label="设备类别" width="120"></el-table-column>
				<el-table-column prop="devdate" label="投入时间" width="180"></el-table-column>
				<el-table-column prop="devuser" label="责任人" width="180"></el-table-column>
				<el-table-column prop="baseCompany.compname" label="所属企业" width="180"></el-table-column>
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.devid)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>

<script>
	export default {
		name:'',
		data() {
			return {
				typeid:'',
				compid:'',
				list:[],
				baseDevtype:[],
				baseCompany:[]
				
			};
		},
		methods:{
			update(row){
				// 跳转
				this.$router.push({name:'DeviceEdit',params:{row:row}})
			},
			del(devid){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/delete"
				// 传递给后端的数据
				var data = {devid:devid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("删除成功");
					this.search();
				})
			},
			add(){
				// 路由跳转
				this.$router.push({path:'/DeviceAdd'})
			},
			search(){
				// 后端网址
				var url = this.baseUrl+"/baseDevice/search"
				// 传递给后端的数据
				var data = {typeid:this.typeid,compid:this.compid};
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
			this.search();
			
			
			// 传递给后端的数据
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
