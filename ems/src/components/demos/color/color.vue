<!-- html部分 -->
<template>
	<div id="app">
		<h1>这是父组件</h1>
		<c1></c1>
		<c2></c2>
	</div>
</template>
<!-- js部分 -->
<script>
	import c1 from './c1'
	import c2 from './c2'
	export default {
		components:{c1,c2},
		 
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
