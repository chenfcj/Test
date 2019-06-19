<template>
	<view>
		<view class="one">清除本地缓存</view>
		<view class="one">关于我们</view>
		<view class="one">检查更新</image></view>
		<button type="primary" v-show="flag" @click="loginout">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  flag:false,
			}
		},
		methods: {
		  fn(index){
			  if(index==1){
					uni.navigateTo({
					
					})
				}
			  if(index==2){
					
				}
			  if(index==3){
					
				}	 
		  },
		  loginout(){
			  uni.showModal({
			  	title: '提示',
			  	content: '确认退出登陆？',
			  	success: function(res) {
			  		if (res.confirm) {
			  			uni.removeStorage({
			  				key: 'baseUser',
			  				success(res) {
			  					uni.reLaunch({
			  						url: '../home/person'
			  					})
			  				}
			  			})
			  		} else if (res.cancel) {
			  			console.log('用户点击取消');
			  		}
			  	}
			  });
			  
		  }
		  
		},
		mounted() {
			uni.getStorage({
				key: 'baseUser',
				success:(res)=>{
					this.flag=true
				}
			});
		}
	}
</script>

<style>
	.one{
		height:40px;
		line-height: 40px;
	}
	image{margin-top: 5px;
		width: 23px;
		height: 23px;
		float: right;
	}
</style>
