import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
// 	v1:'',
// 	v2:'',
// 	color:''
tags:[
	  { name: '首页', type: 'info',url:'/',index:'101' }
	],
	defaultIndex:'101',
	LoginFlag:false
}
// mutations对象用来存储方法
var mutations = {
// 	add(state){
// 		count++;
// 	}
//    changeColor(state,colorName){
// 	   state.color=colorName;
//    }
 addTag(state,obj){
	for (var item of state.tags) {
		item.type='info';
	}
	for (var item of state.tags) {
		if(item.name==obj.name){
			item.type='warning';
			return;
		}
	}
	state.tags.push(obj);
},
		clitag(state,index){
			for (var item of state.tags) {
				item.type='info';
			}
			state.tags[index].type='warning';
		},
		

		delTag(state,index){
			state.tags.splice(index,1);
		},
		// ///////////////////////////////////////////
		addComp(state,comp){
		state.compArr.push(comp);
	},
	  delComp(state,date){
		for(var i=0;i<state.compArr.length;i++){
			if(state.compArr[i].date==date){
				state.compArr.splice(i,1);
			}
		}
	}
		





}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})