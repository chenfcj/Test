<template>
	<view class="content">
		<view class="imgs">
			<image src="../../static/img/gwc.jpg"></image>
			<button class="mini" @click="fn()">去逛逛</button>
			
		</view>
	</view>
</template>

<script>
export default {
	
		data() {
			return {
		
			}
		},
	methods: {
		fn(){
			console.log('aaaaaa')
			uni.navigateTo({
				url:'index'
			})
		}
	
		
		}
	}
</script>


<style>
	.imgs{
		margin-top: 20px;
		text-align: center;
	}
	.btn{
		border: 0px solid ;
	}
</style>
