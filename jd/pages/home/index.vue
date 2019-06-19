<template>
<view class="content">
	<view class="aa">
		
		<view class="so">
			<view class="so1">
				<view class="so2">
					<image src="../../static/img/so.png"></image>
					<view class="so3">请输入</view>
				</view>
			</view>
			<view class="so4">
				<text>牛乳</text>
				<text class="bb1">牛奶</text>
				<text class="bb1">婴儿湿巾</text>
				<text class="bb1">饼干</text>
				<text class="bb1">常温酸奶</text>
				<text class="bb1">牛奶冷藏</text>
			</view></view>
			
			   <view class="tu1">
				<image src="../../static/img/in/jt1.png"></image>
				</view>
		<view class="grid">
			
			<uni-grid :options="[
				{image:'../../static/img/imgs/shangdian.png',text:'超市便利'},
				{image:'../../static/img/imgs/shuiguo.png',text:'果蔬'},
				{image:'../../static/img/imgs/dangao.png',text:'蛋糕'},
				{image:'../../static/img/imgs/xianhua.png',text:'鲜花'},
				{image:'../../static/img/imgs/yiyao.png',text:'医药健康'},
				{image:'../../static/img/imgs/yifu.png',text:'家居时尚'},
				{image:'../../static/img/imgs/jiangquan.png',text:'限时抢券'},
				{image:'../../static/img/imgs/qiandao.png',text:'签到'},
				{image:'../../static/img/imgs/fuli.png',text:'大牌福利'},
				{image:'../../static/img/imgs/miandan.png',text:'天天免单'}]" 
				column-num="5"  show-out-border="false">
			</uni-grid>
			
		</view>		
			 <view class="tu2">
			<image src="../../static/img/in/jt2.png"></image>
			</view>	
			<!-- 轮播图  -->
			<view class="img">
			<swiper :autoplay="true" :interval="1000" :circular="true">
				<swiper-item>
					<view style="background-color: #0000FF;height: 100upx;line-height: 100upx;">
					<image src="../../static/img/in/lbt1.png" mode="" class="img1"></image></view>
				</swiper-item>
				<swiper-item>
					<view style="background-color: #fff333;height: 100upx;line-height: 100upx;">
					<image src="../../static/img/in/lbt2.png" mode="" class="img1"></image></view>
				</swiper-item>
				<swiper-item>
					<view style="background-color: #0000FF;height: 100upx;line-height: 100upx;">
					<image src="../../static/img/in/lbt3.png" mode="" class="img1"></image></view>
				</swiper-item>
				<swiper-item>
					<view style="background-color: #0000FF;height: 100upx;line-height: 100upx;">
					<image src="../../static/img/in/lbt4.png" mode="" class="img1"></image></view>
				</swiper-item>
				<swiper-item>
					<view style="background-color: #0000FF;height: 100upx;line-height: 100upx;">
					<image src="../../static/img/in/lbt5.png" mode="" class="img1"></image></view>
				</swiper-item>
				<swiper-item>
					<view style="background-color: #0000FF;height: 100upx;line-height: 100upx;">
					<image src="../../static/img/in/lbt6.png" mode="" class="img1"></image></view>
				</swiper-item>
			 </swiper>
			</view>
<!-- 轮播图  -->
       



				
				
				
    </view>
</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	export default {
    components: {uniGrid},
		data() {
			return {
				
			};
		},
		methods:{
		
		}
	}


</script>

<style>
	@import url("../../static/css/index.css");
</style>
