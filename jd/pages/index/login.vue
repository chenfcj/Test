<template>
	<view class="content">
		<view>
			<input type="text" placeholder="请输入用户名" v-model="username">
			<view>
				<input :type="flag" placeholder="请输入密码" v-model="password">
				<uni-icon type="eye" size="20" @click='fn'></uni-icon>
			</view>
			<button @click="login">登录</button>
			<button @click="register">注册</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		data() {
			return {
				username: 'lhx',
				password:'123456',
				flag:'password'
			}
		},
		onLoad() {

		},
		methods: {
		
			register(){
				uni.navigateTo({
					url:"register"
				})
			},
			
			login(){
			if(this.username.length<=0){
				uni.showToast({
					title: '请输入用户名',
					duration: 2000,
					
				});
				return;
			}
			if(this.password.length<=0){
				uni.showToast({
					title: '请输入密码',
					duration: 2000,		
				});
				return ;
			}
			if(this.password=="123456" && this.username=="lhx"){
				uni.setStorage({
					key: 'baseUser',
					data: {username:this.username,password:this.password}
				});
				uni.reLaunch({
					url: '../home/index',
					
				})
				uni.setStorage({
					key: 'baseUser',
					data: {username:this.username,password:this.password}
				})
			}		
		},
			
			
			
		}
	}
</script>

<style>
	@import url("../../static/css/login.css");
</style>
