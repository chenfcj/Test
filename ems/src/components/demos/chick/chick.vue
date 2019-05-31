<!-- html部分 -->
<template>
	<div id="app">
		<h1>父组件,萌萌哒的小鸡</h1>
		<el-button @click="fu1">麦琪</el-button>
		<el-button @click="fu2">愤怒的小鸟</el-button>
		 
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
			fu1(){
				this.$router.push({path:'/chick/chick1'});
			},
			fu2(){
				this.$router.push({path:'/chick/chick2'});
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
