<!-- html部分 -->
<template>
	<div id="app">
		<h1>子组件2</h1>
		<el-button@click="fu">打印</el-button>
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
			fu(){
				console.log(this.$store.state.v1);
				console.log(this.$store.state.v2);
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
