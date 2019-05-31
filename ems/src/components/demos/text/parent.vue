<!-- html部分 -->
<template>
	<div id="app">
		<h1>父组件</h1>
		<chil1></chil1>
		<chil2></chil2>
	</div>
</template>
<!-- js部分 -->
<script>
	import chil1 from './chil1'
	import chil2 from './chil2'
	export default {
		 
		components:{chil1,chil2},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
