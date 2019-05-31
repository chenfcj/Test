<!-- html部分 -->
<template>
	<div id="app">
		<button @click="fn1">显示佩奇</button>
		<button @click="fn2">显示乔治</button>
		<router-view />
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn1(){
				this.$router.push({path:'/pig/pig1'});
			},
			fn2(){
				this.$router.push({path:'/pig/pig2'});
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
