import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
// import Menu from '@/components/home/Menu'
// import Main from '@/components/home/Main'
// ///////////////////////////////////////////////////
import CompList from '@/components/baseInfo/Comp/CompList'
import CompAdd from '@/components/baseInfo/Comp/CompAdd'
import CompEdit from '@/components/baseInfo/Comp/CompEdit'

import DevtypeList from '@/components/baseInfo/Devtype/DevtypeList'
import DevtypeAdd from '@/components/baseInfo/Devtype/DevtypeAdd'
import DevtypeEdit from '@/components/baseInfo/Devtype/DevtypeEdit'

import UserList from '@/components/baseInfo/User/UserList'
import UserAdd from '@/components/baseInfo/User/UserAdd'
import UserEdit from '@/components/baseInfo/User/UserEdit'

import DeviceEdit from '@/components/baseInfo/Device/DeviceEdit'
import DeviceAdd from '@/components/baseInfo/Device/DeviceAdd'
import DeviceList from '@/components/baseInfo/Device/DeviceList'

import FlowEdit from '@/components/baseInfo/Flow/FlowEdit'
import FlowAdd from '@/components/baseInfo/Flow/FlowAdd'
import FlowList from '@/components/baseInfo/Flow/FlowList'

import FaultEdit from '@/components/baseInfo/Fault/FaultEdit'
import FaultAdd from '@/components/baseInfo/Fault/FaultAdd'
import FaultList from '@/components/baseInfo/Fault/FaultList'

import RepairEdit from '@/components/baseInfo/Repair/RepairEdit'
import RepairAdd from '@/components/baseInfo/Repair/RepairAdd'
import RepairList from '@/components/baseInfo/Repair/RepairList'

import ReportEdit from '@/components/baseInfo/Report/ReportEdit'
import ReportAdd from '@/components/baseInfo/Report/ReportAdd'
import ReportList from '@/components/baseInfo/Report/ReportList'

import JobEdit from '@/components/baseInfo/Job/JobEdit'
import JobAdd from '@/components/baseInfo/Job/JobAdd'
import JobList from '@/components/baseInfo/Job/JobList'

import ConsumeEdit from '@/components/baseInfo/Consume/ConsumeEdit'
import ConsumeAdd from '@/components/baseInfo/Consume/ConsumeAdd'
import ConsumeList from '@/components/baseInfo/Consume/ConsumeList'

import StandradcoalEdit from '@/components/baseInfo/Standradcoal/StandradcoalEdit'
import StandradcoalAdd from '@/components/baseInfo/Standradcoal/StandradcoalAdd'
import StandradcoalList from '@/components/baseInfo/Standradcoal/StandradcoalList'

import Control from '@/components/baseInfo/Control/Control'
import jobAmount from '@/components/baseInfo/reports/jobAmount'
import energyConsume from '@/components/baseInfo/reports/energyConsume'
import product from '@/components/baseInfo/reports/product'
import devInfo from '@/components/baseInfo/reports/devInfo'
import devl from '@/components/baseInfo/reports/devl'
import devw from '@/components/baseInfo/reports/devw'
import devc from '@/components/baseInfo/reports/devc'


 
import Welcome from '@/components/home/Welcome'
import Login from '@/components/home/Login'

import chick from '@/components/demos/chick/chick'
import chick1 from '@/components/demos/chick/chick1'
import chick2 from '@/components/demos/chick/chick2'
import parent from '@/components/demos/text/parent'
import chil1 from '@/components/demos/text/chil1'
import chil2 from '@/components/demos/text/chil2'
import color from '@/components/demos/color/color'


Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
     { path: '/Login', name: 'Login',component: Login},
		 // {path: '/Menu',name: 'Menu',component: Menu},
		  
		 {path: '/',name: 'Index',component: Index,children:[
			 { path:'CompList', name: 'CompList',component: CompList},
			 { path:'CompAdd', name: 'CompAdd',component: CompAdd},
			 { path:'CompEdit', name: 'CompEdit',component: CompEdit},
			
			 { path:'DevtypeList',name: 'DevtypeList',component:DevtypeList},
			 { path:'DevtypeAdd', name: ' DevtypeAdd',component:  DevtypeAdd},
			 { path:'DevtypeEdit', name: 'DevtypeEdit',component:  DevtypeEdit},
			
			{ path:'UserList',name: 'UserList',component:UserList},
			 { path:'UserAdd',name: 'UserAdd',component:UserAdd},
			 { path:'UserEdit',name: 'UserEdit',component:UserEdit},
			 
			 { path:'DeviceList',name: 'DeviceList',component:DeviceList},
			 { path:'DeviceAdd',name: 'DeviceAdd',component:DeviceAdd},
			 { path:'DeviceEdit',name: 'DeviceEdit',component:DeviceEdit},
			 
			 { path:'FlowList',name: 'FlowList',component:FlowList},
			 { path:'FlowAdd',name: 'FlowAdd',component:FlowAdd},
			 { path:'FlowEdit',name: 'FlowEdit',component:FlowEdit},
			 
			 { path:'FaultList',name: 'FaultList',component:FaultList},
			 { path:'FaultAdd',name: 'FaultAdd',component:FaultAdd},
			 { path:'FaultEdit',name: 'FaultEdit',component:FaultEdit},
			  
			  { path:'RepairList',name: 'RepairList',component:RepairList},
			 { path:'RepairAdd',name: 'RepairAdd',component:RepairAdd},
			 { path:'RepairEdit',name: 'RepairEdit',component:RepairEdit},
			  
			  { path:'ReportList',name: 'ReportList',component:ReportList},
			  { path:'ReportAdd',name: 'ReportAdd',component:ReportAdd},
			  { path:'ReportEdit',name: 'ReportEdit',component:ReportEdit},
			  
			   { path:'JobList',name: 'JobList',component:JobList},
			  { path:'JobAdd',name: 'JobAdd',component:JobAdd},
			  { path:'JobEdit',name: 'JobEdit',component:JobEdit},
			  
			  { path:'Control',name: 'Control',component:Control},
			   
			
			 { path:'ConsumeList',name: 'ConsumeList',component:ConsumeList},
			{ path:'ConsumeAdd',name: 'ConsumeAdd',component:ConsumeAdd},
			{ path:'ConsumeEdit',name: 'ConsumeEdit',component:ConsumeEdit},
			
			 { path:'StandradcoalList',name: 'StandradcoalList',component:StandradcoalList},
			{ path:'StandradcoalAdd',name: 'StandradcoalAdd',component:StandradcoalAdd},
			{ path:'StandradcoalEdit',name: 'StandradcoalEdit',component:StandradcoalEdit},
			
			{ path:'jobAmount',name: 'jobAmount',component:jobAmount},
			{ path:'energyConsume',name: 'energyConsume',component:energyConsume},
			{ path:'product',name: 'product',component:product},
			{ path:'devInfo',name: 'devInfo',component:devInfo},
			{ path:'devl',name: 'devl',component:devl},
			{ path:'devw',name: 'devw',component:devw},
			{ path:'devc',name: 'devc',component:devc},
		
			 { path:'/', name: 'Welcome',component: Welcome}
		 ]},
		
		 
		 { path: '/chick', name: 'chick',component: chick,children:[
			{ path:'chick1', name: 'chick1',component: chick1},
			{ path:'chick2', name: 'chick2',component: chick2}
		 ]},
		  { path: '/parent', name: 'parent',component: parent },
		  { path: '/color', name: 'color',component: color }
		 
  ]
})
