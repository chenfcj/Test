<template>
	<view class="content">
		<view class="top">
			<view class="top1">
				<!-- <view class="setting"><image src="../../static/img/setting.png"></image></view>
				<view class="message"><image src="../../static/img/message.png" mode=""></image></view> -->
		
			</view>
			<view class="top2">
				<image class="whitebar" src="../../static/img/whitebar.png" mode=""></image>
				<button type="primary" @click="lr" v-show="!flag">登录/注册</button>
				<view class="vs" v-show="flag">
					用户名:{{username}}
				</view>
				
			</view>
			
		</view>
		<view class="body">
			<view class="body1">
				<image src="../../static/img/purse.png" mode=""></image><br>
				我的钱包</view>
			<view class="body2">0<br>红包</view>
			<view class="body2">0<br>优惠卷</view>
			<view class="body2">0<br>白条</view>
			<view class="body2">0<br>鲜豆</view>
		</view>
		<!-- //////轮播图 -->
<view class="img">
<swiper :autoplay="true" :interval="1000" :circular="true">
	<swiper-item>
		<view style="background-color: #0000FF;height: 100upx;line-height: 100upx;">
		<image src="../../static/img/lb1.JPG" mode="" class="img1"></image></view>
	</swiper-item>
	<swiper-item>
		<view style="background-color: #fff333;height: 100upx;line-height: 100upx;">
		<image src="../../static/img/lb2.JPG" mode="" class="img1"></image></view>
	</swiper-item>
 </swiper>
</view>
		<view class="bottom">
			<view class="bottom1"><image src="../../static/img/heart.png" mode=""></image><br>我的关注</view>
			<view class="bottom1"><image src="../../static/img/evaluate.png" mode=""></image><br>我的评价</view>
			<view class="bottom1"><image src="../../static/img/address.png" mode=""></image><br>我的地址</view>
			<view class="bottom1"><image src="../../static/img/cardbag.png" mode=""></image><br>我的卡包</view>
			<view class="bottom1"><image src="../../static/img/redpaper.png" mode=""></image><br>红包套餐</view>
			<view class="bottom1"><image src="../../static/img/bonus.png" mode=""></image><br>我的奖励金</view>
			<view class="bottom1" @click="qd"><image src="../../static/img/signin.png" mode=""></image><br>签到有惊喜</view>
			<view class="bottom1"><image src="../../static/img/aftersale.png" mode=""></image><br>退款/售后</view>
			<view class="bottom1"><image src="../../static/img/service.png" mode=""></image><br>客服反馈</view>
			<view class="bottom1"><image src="../../static/img/help.png" mode=""></image><br>帮助中心</view>
			<view class="bottom1"><image src="../../static/img/regis.png" mode=""></image><br>配送员注册</view>
			<view class="bottom1"><image src="../../static/img/run.png" mode=""></image><br>达达同城送</view>
			<view class="bottom1"><image src="../../static/img/jewel.png" mode=""></image><br>金融权益</view>
			<view class="bottom1"><image src="../../static/img/flower.png" mode=""></image><br>掌声有礼</view>
			<view class="bottom1"><image src="../../static/img/reight.png" mode=""></image><br>浦发有礼</view>
		</view>
		
		<view class="btn">
			<button type="warn" @click="tc" v-show="flag">退出登录</button>
		</view>
		  
		</view>

	
	
</template>

<script>
	import uniNavBar from "@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue"
export default {
    components: {uniNavBar},
		data() {
		return {
			username:'',
			flag:false
			
		}
	},
	methods: {
		qd(){
			uni.navigateTo({
				url:"../person/qd"
			})
		},
		lr(){
			uni.navigateTo({
				url:"../index/login"
			})
		},
		pd(){
			if(this.username==''){
				this.flag=false
			}
		},
		
		tc(){
			uni.navigateTo({
				url:"../person/tc"
			})
		}
		
		
		
	},
	mounted() {
		uni.getStorage({
			key: 'baseUser',
			success:(res)=>{
				this.username=res.data.username
				this.flag=true
			}
		})
		this.pd();
	}
	
}
</script>

<style>
	@import url("../../static/css/person.css");
</style>
