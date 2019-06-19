<template>
	<view>
		<view class="wuctab">
			<wuc-tab :tab-list="items" :tabCur.sync="current" @change="onClickItem" 
			:textFlex="true" tabStyle="color:white;font-size:15px;" selectClass="text-white">
			</wuc-tab>
		</view>
		
		  <view class="content">
		    <view v-show="current === 0">	
				 <attention></attention>
		    </view>
		    <view v-show="current === 1">
		      <recipe></recipe>
		    </view>
		    <view v-show="current === 2">
		        
		    </view>
			<view v-show="current === 3">
			   
			</view>
			<view v-show="current === 4">
			
			</view>
			
			
			
		</view>
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import attention from '../fl/attention.vue';
import  recipe from '../fl/recipe.vue'; 


export default {
	components: { WucTab,attention,recipe},
    data() {
        return {
          items: [{name:'关注'},{name:'食谱'},{name:'推荐'},{name:'时尚美妆'},{name:'生活'}],
          current: 0,
        }},
    
    methods: {
        onClickItem(index) {
           if (this.current !== index) {
               this.current = index;
           }
       },
    }
}
</script>

<style>
@import url("../../static/css/fl.css");
</style>44
