<!-- html部分 -->
<template>
	<div id="app">
		<!-- TAGR -->
		
  
	<div id="tag">
	<el-tag  v-for="(tag,index) in $store.state.tags" :key="tag.name" closable :type="tag.type"
	  style="margin-left:20px" @close='del(tag,index)' @click='cil(tag,index)'>
				{{tag.name}}
			</el-tag>
		</div>

		<router-view />
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		 
		data() {
			return {
				
			};
		},
		methods:{
			cil(tag,index){
				this.$router.push({path:tag.url});
				this.$store.commit('clitag',index);
			},
			del(tag,index){
				if(this.$store.state.tags.length==1){
					this.$message("这是最后一个标签")
				}else{
					//
					var flag=this.$store.state.tags[index].type=='warning';
					this.$store.commit('delTag',index);
					
					if(flag){
						if(index==0){
							this.$store.commit('clitag',0);
							this.$router.push({path:this.$store.state.tags[0].url});
						}else{
							this.$store.commit('clitag',index-1);
							this.$router.push({path:this.$store.state.tags[index-1].url});
						}
					}
				}
 
			}
			
		}
	}
</script>
<!-- css部分 -->
<style>
#tag{
	text-align: left;
	margin-top: -75px;
}
</style>
